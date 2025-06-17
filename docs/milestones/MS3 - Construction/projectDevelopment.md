---
slug: ProjectDevelopment
title: Project Development
sidebar_position: 1
---

import video1 from '@site/static/videos/video1.mp4';
import video2 from '@site/static/videos/video2.mp4';
import video3 from '@site/static/videos/video3.mp4';
import video4 from '@site/static/videos/video4.mp4';
import video5 from '@site/static/videos/video5.mp4';

During this Milestone, we focused on the development of the BotBlocker system.

Here's a brief overview of the implemented features and the development process:
1. **Account Creation**: Users can create an account on the BotBlocker web application. This feature is essential for allowing users to vote on profiles.

<video controls style={{ maxWidth: '800px', width: '100%' }}>
  <source src={video1} type="video/mp4" />
  <p>Your browser does not support the video tag.</p>
</video>

2. **Profile Evaluation**: Users can evaluate profiles as "Bot" or "Not Bot". This is a crucial feature for the community-based scoring system. Users can also add reasons for their evaluations, which can help in understanding the context of their decisions. These evaluations are stored in the database and can be accessed later for analysis. They affect the profile's score, which is calculated based on the number of votes.

<video controls style={{ maxWidth: '800px', width: '100%' }}>
  <source src={video2} type="video/mp4" />
  <p>Your browser does not support the video tag.</p>
</video>

3. **Blocking Profiles**: Users can block profiles they find suspicious. This feature allows users to customize their experience and avoid unwanted interactions. Profiles can be manually blocked, and users can also set filters to automatically hide profiles based on their suspicion score and verification status. Blocking a profile will prevent it from appearing in the user's feed.

<video controls style={{ maxWidth: '800px', width: '100%' }}>
  <source src={video3} type="video/mp4" />
  <p>Your browser does not support the video tag.</p>
</video>

4. **Admin and Verifier Roles**: The system has different roles for users. Administrators and verifiers have additional privileges, such as applying verification badges to profiles. This feature helps in building trust within the community by highlighting verified profiles.

<video controls style={{ maxWidth: '800px', width: '100%' }}>
  <source src={video4} type="video/mp4" />
  <p>Your browser does not support the video tag.</p>
</video>

5. **Web Application**: The web application is built using React and is designed to be user-friendly and responsive. For now, the website already has a basic structure and is functional. It allows generic users to search for profiles and view their scores. It also allows verifiers and administrators, in order to manage the profiles and users and to apply verification badges. 

<video controls style={{ maxWidth: '800px', width: '100%' }}>
  <source src={video5} type="video/mp4" />
  <p>Your browser does not support the video tag.</p>
</video>


