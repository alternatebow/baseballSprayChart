import base64
import io
# from tkinter import Y
from flask import Flask, Response, jsonify, request, send_file, send_from_directory
from flask_cors import CORS, cross_origin
import pandas as pd
import numpy as np
import pybaseball as pyb
import matplotlib.pyplot as plt

app = Flask(__name__, static_folder='client/build', static_url_path= '')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Follow Python PEP 8 standards

@app.route('/')
@cross_origin()
def home():
  return send_from_directory(app.static_folder, 'index.html')

@app.route('/chart', methods=["POST"])
@cross_origin()
def customSprayChart():
  content = request.get_json(force=True)
  dframe = lookUp(
    content["firstName"],
    content["lastName"],
    content["start"],
    content["end"]
    )
  print(content['team'])
  print(dframe.shape)
  dframe = dframe.loc[dframe['home_team'] == content["team"]]
  dframe = dframe.sort_values(
    'estimated_woba_using_speedangle',
     ascending=True
     )
  drawStadium(content['park'])
  plotHits(dframe, content)
  
  buf = io.BytesIO()
  plt.savefig(buf, format='png')
  buf.seek(0)
  sprayChart = base64.b64encode(buf.read())
  buf.close()
  return sprayChart

def lookUp(fName: str, lName: str, start: str, end: str):
  id = pyb.playerid_lookup(lName, fName)['key_mlbam'][0]
  start_Date = start
  end_Date = end
  dframe = pyb.statcast_batter(start_Date, end_Date, id)
  return dframe

def drawStadium(teamPark: str):
  stadium = pd.read_csv('mlbstadiums.csv')
  stadium['y'] = stadium['y'] * -1
  stadium = stadium.loc[:, 'team':]
  stad = stadium[stadium['name'] == teamPark]
  stad = stad.groupby('segment')
  plt.figure(figsize=(13, 13))
  for segment, coords in stad:
    plt.plot(coords['x'], coords['y'], linestyle= '-', color = 'black')

def plotHits(data: pd.DataFrame, params):
  print(data['hc_x'].shape, data['hc_y'].shape)
  plt.scatter(
    x = data['hc_x'],
    y = data['hc_y'] * -1,
    edgecolors= 'black', 
    c = data['estimated_woba_using_speedangle'], 
    cmap='Blues'
    )

  plt.colorbar(label = 'WOBA', orientation='vertical')
  
  for i in range(len(data['pitch_type'])):
    row = data.iloc[i]
    if (row["events"] == "home_run"):
      if (np.isnan(row[params["annontate"]])):
        continue
      plt.annotate(
        int(row[params["annontate"]]),
        (row['hc_x'], row['hc_y'] * -1 + 3)
      )
  
  plt.title(params["firstName"] + " " + params["lastName"] + ' Hit Spray Chart')
  plt.axis('off')

if __name__ == '__main__':
  app.debug = True
  app.run
