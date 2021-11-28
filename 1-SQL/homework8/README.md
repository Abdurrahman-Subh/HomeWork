# SQL Ödev 8

1- test veritabanınızda employee isimli sütun bilgileri id(INTEGER), name VARCHAR(50), birthday DATE, email VARCHAR(100) olan bir tablo oluşturalım.

```bash
create table test( id serial primary key, employee varchar(50), email varchar(50), birthdate date);
```

2- Sütunların her birine göre diğer sütunları güncelleyecek 5 adet UPDATE işlemi yapalım.

```bash
update test set employee = 'mehmet' where id = 2 returning *;
```

3- Sütunların her birine göre ilgili satırı silecek 5 adet DELETE işlemi yapalım.

```bash
delete from test where id = 7;
```
