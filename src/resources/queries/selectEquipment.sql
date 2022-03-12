SELECT  id 
     ,  model
     , "serialNumber"
     , "manufacturerId"
FROM equipment 
WHERE id = $1