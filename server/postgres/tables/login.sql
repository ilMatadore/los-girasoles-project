BEGIN;

-- CREATE TABLE "login" ----------------------------------------
CREATE TABLE "public"."login" ( 
	"id" serial,
	"hash" Character Varying( 100 ) NOT NULL,
	"email" Text NOT NULL,
	PRIMARY KEY ( "id" ),
	CONSTRAINT "login_email_key" UNIQUE( "email" ) );
 ;
-- -------------------------------------------------------------

COMMIT;