-- CreateEnum
CREATE TYPE "class_to_map" AS ENUM ('not_mapped', 'nursery', 'lkg', 'ukg', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve');

-- CreateEnum
CREATE TYPE "school_user_type" AS ENUM ('student', 'staff');

-- CreateEnum
CREATE TYPE "feed_visiblity_enum" AS ENUM ('association_feed', 'school_feed', 'global_feed', 'community', 'talent_hub');

-- CreateEnum
CREATE TYPE "rwd_priviledge" AS ENUM ('r', 'rw', 'rwd');

-- CreateEnum
CREATE TYPE "user_type" AS ENUM ('school_user', 'creator', 'schooltalkz_staff');

-- CreateEnum
CREATE TYPE "user_priviledges" AS ENUM ('global', 'local');

-- CreateEnum
CREATE TYPE "gender_enum" AS ENUM ('male', 'female', 'other');

-- CreateEnum
CREATE TYPE "payment_status" AS ENUM ('paid', 'cancelled', 'pending');

-- CreateEnum
CREATE TYPE "status" AS ENUM ('active', 'inactive');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "user_type" "user_type" NOT NULL,
    "user_priviledges" "user_priviledges" NOT NULL DEFAULT 'local',
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "gender" "gender_enum" NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "otp" TEXT,
    "otp_gen_at" TIMESTAMP(3),
    "email_verification_otp" TEXT,
    "email_ver_otp_gen_at" TIMESTAMP(3),
    "phone_verification_otp" TEXT,
    "phone_ver_otp_gen_at" TIMESTAMP(3),
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "phone_verified" BOOLEAN NOT NULL DEFAULT false,
    "week_points" INTEGER DEFAULT 0,
    "month_points" INTEGER DEFAULT 0,
    "overall_points" INTEGER DEFAULT 0,
    "status" "status" DEFAULT 'active',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "school_user" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "is_student" BOOLEAN NOT NULL,
    "schoolId" TEXT NOT NULL,
    "id_by_school" TEXT NOT NULL,
    "isPaid" BOOLEAN DEFAULT false,
    "last_paid_at" TIMESTAMP(3),
    "updated_at" TIMESTAMP(3),
    "priviledges" "rwd_priviledge" NOT NULL DEFAULT 'r',
    "associationId" TEXT NOT NULL,

    CONSTRAINT "school_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "association" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "is_class" BOOLEAN NOT NULL,
    "schoolId" TEXT NOT NULL,
    "mapped_to" "class_to_map" NOT NULL DEFAULT 'not_mapped',
    "sub_association" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "association_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "creator" (
    "id" TEXT NOT NULL,
    "user_details_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "creator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schooltalkz_staff" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "priviledge" "rwd_priviledge" DEFAULT 'r',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "schooltalkz_staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "school" (
    "id" TEXT NOT NULL,
    "subdomain_alloted" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "contact_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "school_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "topic" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts_comments" (
    "id" TEXT NOT NULL,
    "metadata" TEXT,
    "assets" TEXT[],
    "description" TEXT,
    "authorId" TEXT NOT NULL,
    "status" "status" NOT NULL DEFAULT 'active',
    "communityId" TEXT,
    "parentId" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "posts_comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "community" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "creator_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workshop" (
    "id" TEXT NOT NULL,
    "free" BOOLEAN DEFAULT false,
    "description" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "workshop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "stripe_id" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "userId" TEXT NOT NULL DEFAULT 'anonymous',
    "paid_by" TEXT NOT NULL,
    "status" "payment_status" DEFAULT 'pending',
    "payment_initiated" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "paid_on" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bugs" (
    "id" TEXT NOT NULL,
    "error_message" TEXT NOT NULL,
    "status" "status" NOT NULL DEFAULT 'active',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "bugs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_school_userTotopic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_school_userToworkshop" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_topicToworkshop" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_liked_posts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_saved_posts" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_posts_commentsTotopic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_communityTotopic" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_communityToschool_user" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_bugsToschooltalkz_staff" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "user"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "school_user_userId_key" ON "school_user"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "school_user_schoolId_associationId_id_by_school_key" ON "school_user"("schoolId", "associationId", "id_by_school");

-- CreateIndex
CREATE UNIQUE INDEX "association_id_key" ON "association"("id");

-- CreateIndex
CREATE UNIQUE INDEX "association_name_is_class_schoolId_sub_association_key" ON "association"("name", "is_class", "schoolId", "sub_association");

-- CreateIndex
CREATE UNIQUE INDEX "creator_user_details_id_key" ON "creator"("user_details_id");

-- CreateIndex
CREATE UNIQUE INDEX "schooltalkz_staff_userId_key" ON "schooltalkz_staff"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "school_subdomain_alloted_key" ON "school"("subdomain_alloted");

-- CreateIndex
CREATE UNIQUE INDEX "school_email_key" ON "school"("email");

-- CreateIndex
CREATE UNIQUE INDEX "topic_name_key" ON "topic"("name");

-- CreateIndex
CREATE UNIQUE INDEX "payment_stripe_id_key" ON "payment"("stripe_id");

-- CreateIndex
CREATE UNIQUE INDEX "_school_userTotopic_AB_unique" ON "_school_userTotopic"("A", "B");

-- CreateIndex
CREATE INDEX "_school_userTotopic_B_index" ON "_school_userTotopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_school_userToworkshop_AB_unique" ON "_school_userToworkshop"("A", "B");

-- CreateIndex
CREATE INDEX "_school_userToworkshop_B_index" ON "_school_userToworkshop"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_topicToworkshop_AB_unique" ON "_topicToworkshop"("A", "B");

-- CreateIndex
CREATE INDEX "_topicToworkshop_B_index" ON "_topicToworkshop"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_liked_posts_AB_unique" ON "_liked_posts"("A", "B");

-- CreateIndex
CREATE INDEX "_liked_posts_B_index" ON "_liked_posts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_saved_posts_AB_unique" ON "_saved_posts"("A", "B");

-- CreateIndex
CREATE INDEX "_saved_posts_B_index" ON "_saved_posts"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_posts_commentsTotopic_AB_unique" ON "_posts_commentsTotopic"("A", "B");

-- CreateIndex
CREATE INDEX "_posts_commentsTotopic_B_index" ON "_posts_commentsTotopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_communityTotopic_AB_unique" ON "_communityTotopic"("A", "B");

-- CreateIndex
CREATE INDEX "_communityTotopic_B_index" ON "_communityTotopic"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_communityToschool_user_AB_unique" ON "_communityToschool_user"("A", "B");

-- CreateIndex
CREATE INDEX "_communityToschool_user_B_index" ON "_communityToschool_user"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_bugsToschooltalkz_staff_AB_unique" ON "_bugsToschooltalkz_staff"("A", "B");

-- CreateIndex
CREATE INDEX "_bugsToschooltalkz_staff_B_index" ON "_bugsToschooltalkz_staff"("B");

-- AddForeignKey
ALTER TABLE "school_user" ADD CONSTRAINT "school_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "school_user" ADD CONSTRAINT "school_user_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "school_user" ADD CONSTRAINT "school_user_associationId_fkey" FOREIGN KEY ("associationId") REFERENCES "association"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "association" ADD CONSTRAINT "association_schoolId_fkey" FOREIGN KEY ("schoolId") REFERENCES "school"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "creator" ADD CONSTRAINT "creator_user_details_id_fkey" FOREIGN KEY ("user_details_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schooltalkz_staff" ADD CONSTRAINT "schooltalkz_staff_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_comments" ADD CONSTRAINT "posts_comments_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_comments" ADD CONSTRAINT "posts_comments_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_comments" ADD CONSTRAINT "posts_comments_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "posts_comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "community" ADD CONSTRAINT "community_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workshop" ADD CONSTRAINT "workshop_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "school_user"("id") ON DELETE SET DEFAULT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_school_userTotopic" ADD CONSTRAINT "_school_userTotopic_A_fkey" FOREIGN KEY ("A") REFERENCES "school_user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_school_userTotopic" ADD CONSTRAINT "_school_userTotopic_B_fkey" FOREIGN KEY ("B") REFERENCES "topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_school_userToworkshop" ADD CONSTRAINT "_school_userToworkshop_A_fkey" FOREIGN KEY ("A") REFERENCES "school_user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_school_userToworkshop" ADD CONSTRAINT "_school_userToworkshop_B_fkey" FOREIGN KEY ("B") REFERENCES "workshop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_topicToworkshop" ADD CONSTRAINT "_topicToworkshop_A_fkey" FOREIGN KEY ("A") REFERENCES "topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_topicToworkshop" ADD CONSTRAINT "_topicToworkshop_B_fkey" FOREIGN KEY ("B") REFERENCES "workshop"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_liked_posts" ADD CONSTRAINT "_liked_posts_A_fkey" FOREIGN KEY ("A") REFERENCES "posts_comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_liked_posts" ADD CONSTRAINT "_liked_posts_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_saved_posts" ADD CONSTRAINT "_saved_posts_A_fkey" FOREIGN KEY ("A") REFERENCES "posts_comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_saved_posts" ADD CONSTRAINT "_saved_posts_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_posts_commentsTotopic" ADD CONSTRAINT "_posts_commentsTotopic_A_fkey" FOREIGN KEY ("A") REFERENCES "posts_comments"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_posts_commentsTotopic" ADD CONSTRAINT "_posts_commentsTotopic_B_fkey" FOREIGN KEY ("B") REFERENCES "topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_communityTotopic" ADD CONSTRAINT "_communityTotopic_A_fkey" FOREIGN KEY ("A") REFERENCES "community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_communityTotopic" ADD CONSTRAINT "_communityTotopic_B_fkey" FOREIGN KEY ("B") REFERENCES "topic"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_communityToschool_user" ADD CONSTRAINT "_communityToschool_user_A_fkey" FOREIGN KEY ("A") REFERENCES "community"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_communityToschool_user" ADD CONSTRAINT "_communityToschool_user_B_fkey" FOREIGN KEY ("B") REFERENCES "school_user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bugsToschooltalkz_staff" ADD CONSTRAINT "_bugsToschooltalkz_staff_A_fkey" FOREIGN KEY ("A") REFERENCES "bugs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_bugsToschooltalkz_staff" ADD CONSTRAINT "_bugsToschooltalkz_staff_B_fkey" FOREIGN KEY ("B") REFERENCES "schooltalkz_staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;
