import pandas as pd
import numpy as np
import math
import psycopg2


def boxExist(olddf, dbName):
    
    
    conn = psycopg2.connect(
        host="db-entomoc",
        database=dbName,
        user="postgres",
        password="password"
    )
    cursor = conn.cursor()
    
    #check if the column of the template are good or not
    checkCol = ["SpecimenCode", "Continent", "Country", "Ecozone", "Order", "Suborder", "Tribu", "Family","Subfamily", "Genus", "Subgenus", 
       "species", "Subspecies", "Num_ID", "Genus_Descriptor", "Species_Descriptor", "Subgenus_Descriptor", 
       "Subspecies_descriptor", "Genus_Date","Subgenus_Date","Species_Date","Subspecies_Date","Latitude", "Longitude"]
    colname = []
    for col in olddf.columns:
        if col not in checkCol:
            return [], "pas les bonnes colonnes"
        else:
            colname.append(col)
    for col in checkCol:
        if col not in colname:
            
            return [], "pas les bonnes colonnes"
        
    df = olddf[colname].copy()
    noBox = []
    
    for i, row in df.iterrows():
        try:
            if(row.Num_ID==0):
                
                zeroExist = """SELECT *
                                    FROM "Box" 
                                    WHERE "id_box" = '{}' """.format(row.Num_ID)
                cursor.execute(zeroExist)
                if cursor.fetchall()==[]:
                    insertquery = """INSERT INTO "Box"
                                    ("id_box", "location", "museum", "paratypes", "types") 
                                    VALUES 
                                    ({},'{}','{}',{},{})""".format(0,"", "", "NULL", "NULL")
                    print(insertquery)
                    cursor.execute(insertquery)
            else:
                duplicationquery =  """SELECT *
                                    FROM "Box" 
                                    WHERE "id_box" = {} """.format(row.Num_ID) 
                cursor.execute(duplicationquery)
                if(cursor.fetchall()==[]):
                    noBox.append(i+2)
            conn.commit()

        except:
            a = "a"

    cursor.close()
    return noBox, "Certaines boites ne sont pas encore crée"
