# Write your MySQL query statement below
select
    p.product_id,
    round(sum(u.units*p.price) / sum(u.units),2) as average_price
from
    Prices p
left join
    UnitsSold u
on
    p.product_id = u.product_id
where
    u.purchase_date between p.start_date and p.end_date
group by
    p.product_id
union
select
    p.product_id,
    0 as average_price
from
    Prices p
where
    p.product_id not in (
        select distinct product_id from UnitsSold
    )