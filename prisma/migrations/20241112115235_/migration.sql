-- CreateTable
CREATE TABLE "lists" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "total_price" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "is_finished" BOOLEAN NOT NULL DEFAULT false,
    "finished_at" TIMESTAMP(3),

    CONSTRAINT "lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "couples" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "position" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "listId" TEXT NOT NULL,

    CONSTRAINT "couples_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "list_deleted_at_index" ON "lists"("deleted_at");

-- CreateIndex
CREATE INDEX "list_is_finished_finished_at_index" ON "lists"("is_finished", "finished_at");

-- CreateIndex
CREATE INDEX "list_item_list_id_name_index" ON "couples"("listId", "name");

-- CreateIndex
CREATE INDEX "list_item_list_id_position_index" ON "couples"("listId", "position");

-- AddForeignKey
ALTER TABLE "couples" ADD CONSTRAINT "couples_listId_fkey" FOREIGN KEY ("listId") REFERENCES "lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
