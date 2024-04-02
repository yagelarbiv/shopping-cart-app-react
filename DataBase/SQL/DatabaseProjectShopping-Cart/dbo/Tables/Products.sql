CREATE TABLE [dbo].[Products] (
    [products_id]                 INT            NULL,
    [products_title]              NVARCHAR (38)  NULL,
    [products_description]        NVARCHAR (156) NULL,
    [products_price]              INT            NULL,
    [products_discountPercentage] NUMERIC (4, 2) NULL,
    [products_rating]             NUMERIC (3, 2) NULL,
    [products_stock]              INT            NULL,
    [products_brand]              NVARCHAR (26)  NULL,
    [products_category]           NVARCHAR (15)  NULL,
    [products_thumbnail]          NVARCHAR (58)  NULL,
    [products_images]             NVARCHAR (58)  NULL
);


GO

