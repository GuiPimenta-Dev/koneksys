SELECT e.id
     , e.model
     , e."serialNumber" 
FROM manufacturer m 
LEFT JOIN equipment e ON m.id = e."manufacturerId" 
WHERE e."manufacturerId" = $1