BEGIN;

-- CREATE TABLE "canasta" --------------------------------------
CREATE TABLE "public"."canasta" ( 
	"name" Character Varying( 25 ) NOT NULL,
	"price" SmallInt NOT NULL,
	"description" JSON,
	"id" serial,
	PRIMARY KEY ( "id" ) );
 ;
-- -------------------------------------------------------------

COMMIT;