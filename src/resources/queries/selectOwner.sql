SELECT m.id 
     , name 
FROM manufacturer m 
LEFT JOIN equipment e ON m.id = e."manufacturerId" 
WHERE e.id = $1