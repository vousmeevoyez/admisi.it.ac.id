CREATE TABLE `registration` (
	`id` integer PRIMARY KEY NOT NULL,
	`fullName` text NOT NULL,
	`phoneNumber` text NOT NULL,
	`email` text NOT NULL,
	`school` text NOT NULL,
	`schoolSubject` text NOT NULL,
	`reportScore` integer NOT NULL,
	`graduationYear` integer NOT NULL,
	`studyProgram` text NOT NULL,
	`referalCode` text,
	`createdAt` integer
);
--> statement-breakpoint
CREATE UNIQUE INDEX `registration_phoneNumber_unique` ON `registration` (`phoneNumber`);--> statement-breakpoint
CREATE UNIQUE INDEX `registration_email_unique` ON `registration` (`email`);