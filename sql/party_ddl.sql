create table party
(
	party_ref varchar(12) not null
		constraint party_pkey
			primary key,
	party_type varchar(4),
	party_short_name varchar(20),
	party_long_name varchar(40),
	party_extra_long_name varchar(40),
	active_ind varchar(1),
	version_date date default now(),
	version_no integer,
	version_user char(12)
);

alter table party owner to postgres;

