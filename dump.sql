--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    category text NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: exams; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.exams (
    id integer NOT NULL,
    name_id integer NOT NULL,
    category_id integer NOT NULL,
    professor_id integer NOT NULL,
    subject_id integer NOT NULL,
    url text NOT NULL
);


ALTER TABLE public.exams OWNER TO postgres;

--
-- Name: exams_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.exams_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.exams_id_seq OWNER TO postgres;

--
-- Name: exams_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.exams_id_seq OWNED BY public.exams.id;


--
-- Name: names; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.names (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.names OWNER TO postgres;

--
-- Name: names_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.names_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.names_id_seq OWNER TO postgres;

--
-- Name: names_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.names_id_seq OWNED BY public.names.id;


--
-- Name: periods; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.periods (
    id integer NOT NULL,
    period text NOT NULL
);


ALTER TABLE public.periods OWNER TO postgres;

--
-- Name: periods_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.periods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.periods_id_seq OWNER TO postgres;

--
-- Name: periods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.periods_id_seq OWNED BY public.periods.id;


--
-- Name: professors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.professors (
    id integer NOT NULL,
    professor text NOT NULL
);


ALTER TABLE public.professors OWNER TO postgres;

--
-- Name: professors_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.professors_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.professors_id_seq OWNER TO postgres;

--
-- Name: professors_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.professors_id_seq OWNED BY public.professors.id;


--
-- Name: professors_subjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.professors_subjects (
    id integer NOT NULL,
    professor_id integer NOT NULL,
    subject_id integer NOT NULL
);


ALTER TABLE public.professors_subjects OWNER TO postgres;

--
-- Name: professsors_subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.professsors_subjects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.professsors_subjects_id_seq OWNER TO postgres;

--
-- Name: professsors_subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.professsors_subjects_id_seq OWNED BY public.professors_subjects.id;


--
-- Name: subjects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subjects (
    id integer NOT NULL,
    subject text NOT NULL,
    period_id integer NOT NULL
);


ALTER TABLE public.subjects OWNER TO postgres;

--
-- Name: subjects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subjects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subjects_id_seq OWNER TO postgres;

--
-- Name: subjects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subjects_id_seq OWNED BY public.subjects.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: exams id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exams ALTER COLUMN id SET DEFAULT nextval('public.exams_id_seq'::regclass);


--
-- Name: names id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.names ALTER COLUMN id SET DEFAULT nextval('public.names_id_seq'::regclass);


--
-- Name: periods id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.periods ALTER COLUMN id SET DEFAULT nextval('public.periods_id_seq'::regclass);


--
-- Name: professors id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors ALTER COLUMN id SET DEFAULT nextval('public.professors_id_seq'::regclass);


--
-- Name: professors_subjects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors_subjects ALTER COLUMN id SET DEFAULT nextval('public.professsors_subjects_id_seq'::regclass);


--
-- Name: subjects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects ALTER COLUMN id SET DEFAULT nextval('public.subjects_id_seq'::regclass);


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, category) FROM stdin;
1	P1
2	P2
3	P3
4	Segunda Chamada
5	Outras
\.


--
-- Data for Name: exams; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.exams (id, name_id, category_id, professor_id, subject_id, url) FROM stdin;
1	1	1	1	1	https://docente.ifrn.edu.br/carlosbezerra/listas-de-exercicios/botanica/Morfologia%20Vegetal%20-%20Flores.pdf
2	2	3	4	12	http://www.nc.ufpr.br/concursos_externos/copel2011ed02/provas/269-tec-hidrologiaIII.pdf
3	3	1	1	1	http://www.biologia.ufc.br/backup/monitoria/TaxoVeg/arquivos/Exer_Chave_Familias.pdf
4	4	3	1	1	https://intranet.ifs.ifsuldeminas.edu.br/luiza.martins/Morfologia%20Vegetal/Plano%20de%20Ensino_Morfologia%20VegetalI.pdf
5	5	1	1	1	https://novo.ufra.edu.br/images/image0957.pdf
6	6	4	2	11	https://www.scielo.br/j/cr/a/GRsdGwxdrVRWgnmY3chbFRh/?lang=pt&format=pdf
7	7	4	2	11	http://www.esalq.usp.br/departamentos/lgn/pub/seminar/JECTeixeira-200801-Resumo.pdf
8	2	3	2	6	https://www.conhecer.org.br/enciclop/2018a/agrar/avaliacao%20fisiologica.pdf
9	2	1	1	1	https://www.scielo.br/j/rbpm/a/P9qy6HMfj9BBh7qqmZ6R9mg/?format=pdf&lang=pt
\.


--
-- Data for Name: names; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.names (id, name) FROM stdin;
1	2018.2
2	2020.1
3	2020.2
4	2019.1
5	2019.2
6	2018.1
7	2010.2
\.


--
-- Data for Name: periods; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.periods (id, period) FROM stdin;
2	Segundo
3	Terceiro
4	Quarto
5	Quinto
6	Sexto
7	Eletivas
1	Primeiro
\.


--
-- Data for Name: professors; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.professors (id, professor) FROM stdin;
1	Matheus Salomao
2	Daniel Uehara
3	Marcela Carvalho
4	Alana Bonamigo
5	Iara Rufato
6	Rafaela Mirabile
7	Juliana Balestrin
\.


--
-- Data for Name: professors_subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.professors_subjects (id, professor_id, subject_id) FROM stdin;
1	1	1
2	2	11
3	3	2
4	4	12
5	5	3
6	6	13
7	7	4
8	1	14
9	3	5
10	5	5
11	2	6
12	7	6
13	2	7
14	1	7
15	4	8
16	5	8
17	5	9
18	2	9
19	3	10
20	6	10
\.


--
-- Data for Name: subjects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subjects (id, subject, period_id) FROM stdin;
1	Morfologia Vegetal	1
2	Topografia I	1
3	Anatomia da Madeira	2
4	Topografia II	2
5	Fisiologia Vegetal	3
6	Sementes Florestais	3
7	Sensoriamento Remoto I	3
8	Dendrologia	4
9	Dendrometria	4
10	Estruturas da Madeira	5
11	Biotecnologia Florestal	6
12	Hidrologia	6
13	Microbiologia Ambiental	7
14	Agrossilvicultura	7
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 5, true);


--
-- Name: exams_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.exams_id_seq', 12, true);


--
-- Name: names_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.names_id_seq', 7, true);


--
-- Name: periods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.periods_id_seq', 7, true);


--
-- Name: professors_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.professors_id_seq', 7, true);


--
-- Name: professsors_subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.professsors_subjects_id_seq', 20, true);


--
-- Name: subjects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subjects_id_seq', 14, true);


--
-- Name: categories categories_category_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_category_key UNIQUE (category);


--
-- Name: categories categories_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pk PRIMARY KEY (id);


--
-- Name: exams exams_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT exams_pk PRIMARY KEY (id);


--
-- Name: names names_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.names
    ADD CONSTRAINT names_name_key UNIQUE (name);


--
-- Name: names names_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.names
    ADD CONSTRAINT names_pk PRIMARY KEY (id);


--
-- Name: periods periods_period_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.periods
    ADD CONSTRAINT periods_period_key UNIQUE (period);


--
-- Name: periods periods_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.periods
    ADD CONSTRAINT periods_pk PRIMARY KEY (id);


--
-- Name: professors professors_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_pk PRIMARY KEY (id);


--
-- Name: professors professors_professor_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors
    ADD CONSTRAINT professors_professor_key UNIQUE (professor);


--
-- Name: professors_subjects professsors_subjects_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors_subjects
    ADD CONSTRAINT professsors_subjects_pk PRIMARY KEY (id);


--
-- Name: subjects subjects_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_pk PRIMARY KEY (id);


--
-- Name: subjects subjects_subject_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_subject_key UNIQUE (subject);


--
-- Name: exams exams_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT exams_fk0 FOREIGN KEY (name_id) REFERENCES public.names(id);


--
-- Name: exams exams_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT exams_fk1 FOREIGN KEY (category_id) REFERENCES public.categories(id);


--
-- Name: exams exams_fk2; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT exams_fk2 FOREIGN KEY (professor_id) REFERENCES public.professors(id);


--
-- Name: exams exams_fk3; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.exams
    ADD CONSTRAINT exams_fk3 FOREIGN KEY (subject_id) REFERENCES public.subjects(id);


--
-- Name: professors_subjects professsors_subjects_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors_subjects
    ADD CONSTRAINT professsors_subjects_fk0 FOREIGN KEY (professor_id) REFERENCES public.professors(id);


--
-- Name: professors_subjects professsors_subjects_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professors_subjects
    ADD CONSTRAINT professsors_subjects_fk1 FOREIGN KEY (subject_id) REFERENCES public.subjects(id);


--
-- Name: subjects subjects_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subjects
    ADD CONSTRAINT subjects_fk0 FOREIGN KEY (period_id) REFERENCES public.periods(id);


--
-- PostgreSQL database dump complete
--

