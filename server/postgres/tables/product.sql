BEGIN;

-- CREATE TABLE "product" --------------------------------------
CREATE TABLE "public"."product" ( 
	"id" serial,
	"name" Character Varying( 25 ) NOT NULL,
	"price" SmallInt NOT NULL,
	"unidad" Text,
	"available" Boolean NOT NULL,
	PRIMARY KEY ( "id" ) );
 ;
-- -------------------------------------------------------------

COMMIT;