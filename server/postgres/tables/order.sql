BEGIN;

-- CREATE TABLE "order" ----------------------------------------
CREATE TABLE "public"."order" ( 
	"order_id" serial,
	"order_user_id" SmallInt NOT NULL,
	"order_price" SmallInt NOT NULL,
	"order_products" JSON,
	"order_date" Date NOT NULL,
	PRIMARY KEY ( "order_id" ) );
 ;
-- -------------------------------------------------------------

COMMIT;

BEGIN;

-- CREATE LINK "fk_user" ---------------------------------------
ALTER TABLE "public"."order"
	ADD CONSTRAINT "fk_user" FOREIGN KEY ( "order_user_id" )
	REFERENCES "public"."users" ( "id" ) MATCH SIMPLE
	ON DELETE No Action
	ON UPDATE No Action;
-- -------------------------------------------------------------

COMMIT;