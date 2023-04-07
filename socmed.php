<?php
    header('Access-Control-Allow-Origin: *');
    // root
    $socmed = [
        [   
            "img" => "fb.png",
            "name" => "Facebook",
            "company" => "Meta Platforms, Inc.",
            "launched" => "February 4, 2004",
            "description" => "Facebook is the largest social media platform in the world.",
            "founders" => ["Mark Zuckerberg","Eduardo Saverin","Dustin Moskovitz","Chris Hughes"]
        ],
        [
            "img" => "yt.png",
            "name" => "Youtube",
            "company" => "Google Inc.",
            "launched" => "February 14, 2005",
            "description" => "YouTube dominates video content sharing.",
            "founders" => ["Steve Chen","Chad Hurley","Jawed Karim","Susan Diane Wojcicki"]
        ],
        [
            "img" => "ig.png",
            "name" => "Instagram",
            "company" => "Meta Platforms, Inc.",
            "launched" => "October 6, 2010",
            "description" => "Instagram is a social network where product-based businesses, influencers, and coaches can thrive.",
            "founders" => ["Kevin Systrom","Mike Krieger","Adam","Mosseri"]
        ],
        [
            "img" => "tiktok.png",
            "name" => "Tiktok",
            "company" => "ByteDance Ltd.",
            "launched" => "September 2016",
            "description" => "Tiktok is the leading destination for short-form mobile video” with a company mission to inspire creativity and bring joy.",
            "founders" => ["Zhang Yiming","Toutiao","Shou","Zi Chew"]
        ],
        [
            "img" => "twitter.png",
            "name" => "Twitter",
            "company" => "Twitter, Inc.",
            "launched" => "March 21, 2006",
            "description" => "Twitter is a microblogging platform where users primarily share short posts called tweets.",
            "founders" => ["Evan Williams", "Biz Stone","Noah Glass","Jack Dorsey"]
        ]

    ];

    $data = json_encode($socmed);
    echo $data;
    
?>
