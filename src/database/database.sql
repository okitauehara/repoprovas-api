CREATE TABLE "subjects" (
	"id" serial NOT NULL,
	"subject" TEXT NOT NULL UNIQUE,
	"period_id" integer NOT NULL,
	CONSTRAINT "subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "professors" (
	"id" serial NOT NULL,
	"professor" TEXT NOT NULL UNIQUE,
	CONSTRAINT "professors_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "categories" (
	"id" serial NOT NULL,
	"category" TEXT NOT NULL UNIQUE,
	CONSTRAINT "categories_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "names" (
	"id" serial NOT NULL,
	"name" TEXT NOT NULL UNIQUE,
	CONSTRAINT "names_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "exams" (
	"id" serial NOT NULL,
	"name_id" integer NOT NULL,
	"category_id" integer NOT NULL,
	"professor_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	"url" TEXT NOT NULL,
	CONSTRAINT "exams_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "professors_subjects" (
	"id" serial NOT NULL,
	"professor_id" integer NOT NULL,
	"subject_id" integer NOT NULL,
	CONSTRAINT "professors_subjects_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "periods" (
	"id" serial NOT NULL,
	"period" TEXT NOT NULL UNIQUE,
	CONSTRAINT "periods_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


ALTER TABLE "subjects" ADD CONSTRAINT "subjects_fk0" FOREIGN KEY ("period_id") REFERENCES "periods"("id");

ALTER TABLE "exams" ADD CONSTRAINT "exams_fk0" FOREIGN KEY ("name_id") REFERENCES "names"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk1" FOREIGN KEY ("category_id") REFERENCES "categories"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk2" FOREIGN KEY ("professor_id") REFERENCES "professors"("id");
ALTER TABLE "exams" ADD CONSTRAINT "exams_fk3" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");

ALTER TABLE "professors_subjects" ADD CONSTRAINT "professors_subjects_fk0" FOREIGN KEY ("professor_id") REFERENCES "professors"("id");
ALTER TABLE "professors_subjects" ADD CONSTRAINT "professors_subjects_fk1" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id");


INSERT INTO categories (category) VALUES ('P1');
INSERT INTO categories (category) VALUES ('P2');
INSERT INTO categories (category) VALUES ('P3');
INSERT INTO categories (category) VALUES ('Segunda Chamada');
INSERT INTO categories (category) VALUES ('Outras');

INSERT INTO professors (professor) VALUES ('Matheus Salomao');
INSERT INTO professors (professor) VALUES ('Daniel Uehara');
INSERT INTO professors (professor) VALUES ('Marcela Carvalho');
INSERT INTO professors (professor) VALUES ('Alana Bonamigo');
INSERT INTO professors (professor) VALUES ('Iara Rufato');
INSERT INTO professors (professor) VALUES ('Rafaela Mirabile');
INSERT INTO professors (professor) VALUES ('Juliana Balestrin');

INSERT INTO periods (period) VALUES ('Primeiro');
INSERT INTO periods (period) VALUES ('Segundo');
INSERT INTO periods (period) VALUES ('Terceiro');
INSERT INTO periods (period) VALUES ('Quarto');
INSERT INTO periods (period) VALUES ('Quinto');
INSERT INTO periods (period) VALUES ('Sexto');
INSERT INTO periods (period) VALUES ('Eletivas');

INSERT INTO subjects (subject, period_id) VALUES ('Morfologia Vegetal', 1);
INSERT INTO subjects (subject, period_id) VALUES ('Topografia I', 1);
INSERT INTO subjects (subject, period_id) VALUES ('Anatomia da Madeira', 2);
INSERT INTO subjects (subject, period_id) VALUES ('Topografia II', 2);
INSERT INTO subjects (subject, period_id) VALUES ('Fisiologia Vegetal', 3);
INSERT INTO subjects (subject, period_id) VALUES ('Sementes Florestais', 3);
INSERT INTO subjects (subject, period_id) VALUES ('Sensoriamento Remoto I', 3);
INSERT INTO subjects (subject, period_id) VALUES ('Dendrologia', 4);
INSERT INTO subjects (subject, period_id) VALUES ('Dendrometria', 4);
INSERT INTO subjects (subject, period_id) VALUES ('Estruturas da Madeira', 5);
INSERT INTO subjects (subject, period_id) VALUES ('Biotecnologia Florestal', 6);
INSERT INTO subjects (subject, period_id) VALUES ('Hidrologia', 6);
INSERT INTO subjects (subject, period_id) VALUES ('Microbiologia Ambiental', 7);
INSERT INTO subjects (subject, period_id) VALUES ('Agrossilvicultura', 7);

INSERT INTO professors_subjects (professor_id, subject_id) VALUES (1, 1);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (2, 11);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (3, 2);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (4, 12);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (5, 3);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (6, 13);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (7, 4);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (1, 14);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (3, 5);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (5, 5);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (2, 6);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (7, 6);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (2, 7);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (1, 7);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (4, 8);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (5, 8);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (5, 9);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (2, 9);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (3, 10);
INSERT INTO professors_subjects (professor_id, subject_id) VALUES (6, 10);