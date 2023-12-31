--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

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

--
-- Name: day_of_week; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.day_of_week AS ENUM (
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
);


ALTER TYPE public.day_of_week OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: doctor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.doctor (
    id integer NOT NULL,
    nama_doctor character varying(70) NOT NULL
);


ALTER TABLE public.doctor OWNER TO postgres;

--
-- Name: doctor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.doctor_id_seq OWNER TO postgres;

--
-- Name: doctor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.doctor_id_seq OWNED BY public.doctor.id;


--
-- Name: jadwal_doctor; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jadwal_doctor (
    id integer NOT NULL,
    doctor_id integer,
    time_start time without time zone,
    time_finish time without time zone,
    qouta integer,
    status boolean,
    datee date,
    day public.day_of_week
);


ALTER TABLE public.jadwal_doctor OWNER TO postgres;

--
-- Name: jadwal_doctor_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jadwal_doctor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jadwal_doctor_id_seq OWNER TO postgres;

--
-- Name: jadwal_doctor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jadwal_doctor_id_seq OWNED BY public.jadwal_doctor.id;


--
-- Name: user_admin; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_admin (
    id integer NOT NULL,
    username character varying(25) NOT NULL,
    password character varying NOT NULL,
    userrole character varying(10) NOT NULL,
    CONSTRAINT user_admin_userrole_check CHECK (((userrole)::text = ANY (ARRAY[('user'::character varying)::text, ('admin'::character varying)::text])))
);


ALTER TABLE public.user_admin OWNER TO postgres;

--
-- Name: user_admin_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_admin_id_seq OWNER TO postgres;

--
-- Name: user_admin_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_admin_id_seq OWNED BY public.user_admin.id;


--
-- Name: doctor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctor ALTER COLUMN id SET DEFAULT nextval('public.doctor_id_seq'::regclass);


--
-- Name: jadwal_doctor id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jadwal_doctor ALTER COLUMN id SET DEFAULT nextval('public.jadwal_doctor_id_seq'::regclass);


--
-- Name: user_admin id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_admin ALTER COLUMN id SET DEFAULT nextval('public.user_admin_id_seq'::regclass);


--
-- Data for Name: doctor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.doctor (id, nama_doctor) FROM stdin;
1	dr. richart le
2	dr. m.daffa
\.


--
-- Data for Name: jadwal_doctor; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jadwal_doctor (id, doctor_id, time_start, time_finish, qouta, status, datee, day) FROM stdin;
52	1	11:20:00	13:30:00	10	t	2023-06-05	Monday
53	1	11:20:00	13:30:00	10	t	2023-06-12	Monday
54	1	11:20:00	13:30:00	10	t	2023-06-19	Monday
55	1	11:20:00	13:30:00	10	t	2023-06-26	Monday
56	1	11:20:00	13:30:00	10	t	2023-07-03	Monday
\.


--
-- Data for Name: user_admin; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_admin (id, username, password, userrole) FROM stdin;
1	admin	$2b$10$ccrzPIuZAqaAuZiioKZ6Be3dy17MOGH7hrPNBHWhrldcOkW2yaKJu	admin
2	user	$2b$10$yuZkMlnN5uxSxfYALYGJReqQWuW5e4/g7/xOAGWJmxs2ggPIO8sK6	user
\.


--
-- Name: doctor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.doctor_id_seq', 2, true);


--
-- Name: jadwal_doctor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jadwal_doctor_id_seq', 56, true);


--
-- Name: user_admin_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_admin_id_seq', 2, true);


--
-- Name: doctor doctor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.doctor
    ADD CONSTRAINT doctor_pkey PRIMARY KEY (id);


--
-- Name: jadwal_doctor jadwal_doctor_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jadwal_doctor
    ADD CONSTRAINT jadwal_doctor_pkey PRIMARY KEY (id);


--
-- Name: user_admin user_admin_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_admin
    ADD CONSTRAINT user_admin_pkey PRIMARY KEY (id);


--
-- Name: user_admin user_admin_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_admin
    ADD CONSTRAINT user_admin_username_key UNIQUE (username);


--
-- Name: jadwal_doctor jadwal_doctor_doctor_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jadwal_doctor
    ADD CONSTRAINT jadwal_doctor_doctor_id_fkey FOREIGN KEY (doctor_id) REFERENCES public.doctor(id);


--
-- PostgreSQL database dump complete
--

