module.exports = {

  'Step One :  ' : function (browser){
    var data = browser.globals;
    var urll= data.urls.LOGIN;    //'http://rtmediatest.com';
    var settings =   urll + '/wp-admin/options-general.php?page=bp-components';
    var adduser = urll + "/wp-admin/user-new.php";
      browser
          .maximizeWindow()
          .url('http://rtmediatest.com')
          .waitForElementVisible('body', 2000)
          .getTitle(function(title) {
            console.log(title);
		})

    .wplogin(urll,data.USERNAME,data.PASSWORD)
          //.wplogin('http://rtmediatest.com','prabuddha','QlNC0qIT4RHphf6')
          //debug
          .getTitle(function(title) {
            console.log(title);
		})

          //.openrtMediaSettings()
        //  .click('#menu-users .menu-top .wp-menu-name')
          .url(adduser)
          .pause(2000)
          //debug
          .getTitle(function(title) {
            console.log(title);
		})

      //test admin
          .setValue('input[id="user_login"]',data.TESTADMIN)
          .setValue('input[id="email"]',"abc@cc.in")
          .setValue('input[id="first_name"]',data.TESTADMIN)
          .setValue('input[id="pass1"]',data.TESTADMINPASSWORD)
          .setValue('input[id="pass2"]',data.TESTADMINPASSWORD)
          .click("#role option[value='administrator']")
          .click('#createusersub')
          .pause(2000)



    //test editor
    .url(adduser)
    .pause(2000)
    .setValue('input[id="user_login"]',data.TESTEDITOR)
    .setValue('input[id="email"]',"abc1@cc.in")
    .setValue('input[id="first_name"]',data.TESTEDITOR)
    .setValue('input[id="pass1"]',data.TESTEDITORPASSWORD)
    .setValue('input[id="pass2"]',data.TESTEDITORPASSWORD)
    .click("#role option[value='editor']")
    .click('#createusersub')
    .pause(2000)




    //test author
    .url(adduser)
    .pause(2000)
    .setValue('input[id="user_login"]',data.TESTAUTHOR)
    .setValue('input[id="email"]',"abc2@cc.in")
    .setValue('input[id="first_name"]',data.TESTAUTHOR)
    .setValue('input[id="pass1"]',data.TESTAUTHORPASSWORD)
    .setValue('input[id="pass2"]',data.TESTAUTHORPASSWORD)
    .click("#role option[value='author']")
    .click('#createusersub')
    .pause(2000)




//test subscriber

.url(adduser)
.pause(2000)
.setValue('input[id="user_login"]',data.TESTSUBSCRIBER)
.setValue('input[id="email"]',"abc3@cc.in")
.setValue('input[id="first_name"]',data.TESTSUBSCRIBER)
.setValue('input[id="pass1"]',data.TESTSUBSCRIBERPASSWORD)
.setValue('input[id="pass2"]',data.TESTSUBSCRIBERPASSWORD)
.click("#role option[value='subscriber']")
.click('#createusersub')
.pause(2000)




//test contributor

.url(adduser)
.pause(2000)
.setValue('input[id="user_login"]',data.TESTCONTRIBUTOR)
.setValue('input[id="email"]',"abc4@cc.in")
.setValue('input[id="first_name"]',data.TESTCONTRIBUTOR)
.setValue('input[id="pass1"]',data.TESTCONTRIBUTORPASSWORD)
.setValue('input[id="pass2"]',data.TESTCONTRIBUTORPASSWORD)
.click("#role option[value='contributor']")
.click('#createusersub')
.pause(2000)




//upload media to medias
.goToMedia()
.getTitle(function(title) {
  console.log(title);

  for( var i = 0; i < 12 ; i++ ) {
    console.log("uploading media photo for setup..")
    browser.click('#rtmedia-nav-item-music')
          .waitForElementVisible('body', 1500)
          .click('#rtm_show_upload_ui')
          .click('.rtm-select-files')
          .setValue('input[type=file]', require('path').resolve(data.path.TEST_IMAGE))
          .click('.start-media-upload')
          .pause(8000);
        };
})

//Activate groups
  .url(settings)
  .click('input[name="bp_components[groups]"]')
  .click('#bp-admin-component-submit')



    //demo groups

    .url(urll + '/groups/create/step/group-details/')
    .setValue('#group-name','test')
    .setValue('#group-desc','creating test')
    .click('#group-creation-create')
    .pause(2000)
    .click('#group-creation-next')
    .click('#bbp-create-group-forum')
    .click('#group-creation-next')
    .pause(2000)
    .click('#group-creation-finish')
    .pause(2000)
    .wplogout()


    //login for others
   .wplogin(urll,data.TESTADMIN,data.TESTADMINPASSWORD)
   .url(urll + '/groups/test/')
   .getTitle(function(title) {
     console.log(title);
})
   .click('a[title="Join Group"]')
   .wplogout()

   //login for others
  .wplogin(urll,data.TESTAUTHOR,data.TESTAUTHORPASSWORD)
  .url(urll + '/groups/test/')
  .getTitle(function(title) {
    console.log(title);
})
  .click('a[title="Join Group"]')
  .wplogout()


  //login for others
 .wplogin(urll,data.TESTEDITOR,data.TESTEDITORPASSWORD)
 .getTitle(function(title) {
   console.log(title);
})
 .url(urll + '/groups/test/')
 .click('a[title="Join Group"]')
 .wplogout()

 //login for others
.wplogin(urll,data.TESTCONTRIBUTOR,data.TESTCONTRIBUTORPASSWORD)
.getTitle(function(title) {
  console.log(title);
})
.url(urll + '/groups/test/')
.click('a[title="Join Group"]')
.wplogout()

//login for others
.wplogin(urll,data.TESTSUBSCRIBER,data.TESTSUBSCRIBERPASSWORD)
.getTitle(function(title) {
  console.log(title);
})
.url(urll + '/groups/test/')
.click('a[title="Join Group"]')
.wplogout()








          }
        };
