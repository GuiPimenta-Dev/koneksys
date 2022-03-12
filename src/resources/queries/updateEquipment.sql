UPDATE equipment 
SET model               = $1
  , "serialNumber"      = $2 
  , "manufacturerId"    = $3 
WHERE id = $4