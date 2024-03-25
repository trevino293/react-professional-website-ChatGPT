// src/Profile.js
import React from 'react';
import './Profile.css'; // Importing CSS for styling

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={"https://ff1048bfe877db8f06f7ce58fea77a532dc2413a80c3ec75f15f794-apidata.googleusercontent.com/download/storage/v1/b/at_professional_objects/o/IMG_3817%20(1).JPG?jk=AWNiL9Ib_e-vmydEorR5hZVKuuSLjr2aql-SRsIbiL0dk8vgVl9n5z_6Jkylca8JG78YB5OrW5dxAfNLcmkghqOMGh1djNEMxnmkljk6gj6Ll9nZigSiygLoSh5OiC-8_XScrvs3b-jDCWDItUB3zGMVMrZmyA0iGJFak5OlqBKGMzEMJBQMfYn7u_e1vbMyXNFUKeQh98eQcm7podESwV6kXVZBatYt5VsL1ftlCR7iiEpv0stNC8A77cF5XQaAkZD-9-OaKcTnC5h9eqoeCfYkrVd-lF6M4L6GFBJcE5M73UixMkUBnXYQrnjVpEyW3pwT8NV4Kl2I2MD53DwvF5rubl0wullEJLf6B7FLoEO6anqersSESTu-hZLKjlI6m8P7FN9dQRjXBV7BbKGtaUM-2Gqp3GIPtg1I2mzdfEEMXfZsny7uzfR52HuPptGJHefQUNlzwA3uc5vTGX2hZo2eQJx3OKGXHtLmP9wXvvVbbQaQ-D--59Y5I98LwT8QtBsWWMSod5snOO_Majv3jNQDyrXouMXAchbn_mQ5XiVehAVdxC5U3RaewgYhBQ4ap0ck3yUxTBLNvvZIEmil0d8pPLVAXmxEXTmISN8EXuanWs3vlxgwisUnw8tOzCSl8AyLyPCiu8YVRYpXC2lUzqyy5UAux1qCkCYOlTHlx3BZ9s1OTqi9CVKA0xCn6XP7uvDlx1qCIChe_zquP3opb1eCwsXSV2Jm02juHuBStp__TELZ0LMcVrVVJhQE-o26iLz5-TjzmpLhBXppEKO_HxVi_okALBhi_TL9za8BMuQSjPlS1sp6OQjhI_nqTK-g-z34iYW7WBok1MaVg5H5wcpeBFJDoZZ3mPxeq8E6AdLFoelmiY-Qv_nCOTbkXtq1nGswFJQy3BB2OO9pip1DJMeRFyK07fDtmskA5kGmuHFwS69zebBd0IjFW73JZ5uOt7tIvNzhIOxlFSiLQw0tvyjzzgPtl-znz1zc3USvPPc-PgYr16xbA1q0RmCqLqDSt3zglsPlzIXd-dg1qLUbGFLYp8t9xmSuT7IgOkbS1yPseQs3TzryXbAeTmuz13KhbvwADi59RcZNB69Pi9KviuBZGz7_O11g1521Me_Ps87glyFsmiE&isca=1"} alt="Anthony" />
      </div>
      <div className="profile-name">Anthony B. Trevino</div>
      <div className="profile-skills">
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
          <li>Skill 3</li>
          {/* Add more skills as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
