-- CREATE TABLE "users" ----------------------------------------
BEGIN TRANSACTION;

CREATE TABLE "public"."users" ( 
	"id" serial,
	"first_name" Character Varying( 100 ),
	"last_name" Character Varying( 100 ),
	"email" Text NOT NULL,
	"address" Character Varying( 300 ),
	"city" Character Varying( 100 ),
	"postal" Character Varying( 50 ),
	"country" Character Varying( 50 ),
	"joined" Timestamp Without Time Zone NOT NULL,
	"phone" Character Varying( 20 ),
	"state" Character Varying( 50 ),
	PRIMARY KEY ( "id" ),
	CONSTRAINT "users_email_key" UNIQUE( "email" ) );


COMMIT;