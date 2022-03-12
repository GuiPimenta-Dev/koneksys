CREATE TABLE manufacturer ( id   text PRIMARY KEY
                          , name text
);  


CREATE TABLE equipment ( id                 text PRIMARY KEY
                       , model              text
                       , "serialNumber"     text
                       , "manufacturerId"   text REFERENCES manufacturer(id) ON DELETE CASCADE
);

