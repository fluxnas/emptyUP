CREATE TABLE "users"(
    "id" SERIAL NOT NULL,
    "username" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "users" ADD PRIMARY KEY("id");
ALTER TABLE
    "users" ADD CONSTRAINT "users_username_unique" UNIQUE("username");
ALTER TABLE
    "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");
CREATE TABLE "buildings"(
    "id" SERIAL NOT NULL,
    "adress" VARCHAR(255) NOT NULL,
    "zipcode" INTEGER NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "type" VARCHAR(255) NOT NULL,
    "dateofpost" INTEGER NOT NULL,
    "admin_id" INTEGER NOT NULL,
    "photo_url" TEXT NOT NULL
);
ALTER TABLE
    "buildings" ADD PRIMARY KEY("id");
ALTER TABLE
    "buildings" ADD CONSTRAINT "buildings_adress_unique" UNIQUE("adress");
CREATE TABLE "comments"(
    "id" SERIAL NOT NULL,
    "building_id" INTEGER NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL
);
ALTER TABLE
    "comments" ADD PRIMARY KEY("id");
CREATE TABLE "annonces"(
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "date" INTEGER NOT NULL
);
ALTER TABLE
    "annonces" ADD PRIMARY KEY("id");
CREATE TABLE "messages"(
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "content" VARCHAR(255) NOT NULL,
    "date" INTEGER NOT NULL,
    "discussion_id" INTEGER NOT NULL
);
ALTER TABLE
    "messages" ADD PRIMARY KEY("id");
CREATE TABLE "discussion"(
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL
);
ALTER TABLE
    "discussion" ADD PRIMARY KEY("id");
CREATE TABLE "like_per_building"(
    "id" SERIAL NOT NULL,
    "building_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL
);
ALTER TABLE
    "like_per_building" ADD PRIMARY KEY("id");
ALTER TABLE
    "comments" ADD CONSTRAINT "comments_building_id_foreign" FOREIGN KEY("building_id") REFERENCES "buildings"("id");
ALTER TABLE
    "like_per_building" ADD CONSTRAINT "like_per_building_building_id_foreign" FOREIGN KEY("building_id") REFERENCES "buildings"("id");
ALTER TABLE
    "Buildings" ADD CONSTRAINT "buildings_admin_id_foreign" FOREIGN KEY("admin_id") REFERENCES "users"("id");
ALTER TABLE
    "annonces" ADD CONSTRAINT "annonces_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "messages" ADD CONSTRAINT "messages_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "discussion" ADD CONSTRAINT "discussion_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "like_per_building" ADD CONSTRAINT "like_per_building_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "comments" ADD CONSTRAINT "comments_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");
ALTER TABLE
    "messages" ADD CONSTRAINT "messages_discussion_id_foreign" FOREIGN KEY("discussion_id") REFERENCES "discussion"("id");