-- CreateTable
CREATE TABLE "ConversationState" (
    "id" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "currentOrder" JSONB,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ConversationState_pkey" PRIMARY KEY ("id")
);
