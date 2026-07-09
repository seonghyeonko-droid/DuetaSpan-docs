# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.32s  <ret> 발화 (turn1 첫 프레임)
     3.38s  user  발화 끝
     3.55s  agent 발화 시작: <ret> Certainly, let’s get that scheduled for you. I’ve sche
     4.28s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.40s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     8.62s  user  발화 시작: Yeah.
     9.25s  user  발화 끝
    12.13s  agent 발화 끝
    12.48s  user  발화 시작: Can you send me directions to the property?
    14.66s  <ret> 발화 (turn4 첫 프레임)
    14.82s  agent 발화 시작: <ret> Of course, I can provide those for you. The address fo
    14.83s  user  발화 끝
    15.86s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.69s]: (tool result) Directions to The Grandview Lofts are: 123 Elm Street, A
    18.31s  user  발화 시작: Yeah, yeah.
    19.92s  user  발화 끝
    21.54s  agent 발화 끝
    21.72s  user  발화 시작: And what’s the neighborhood like around there?
    23.62s  <ret> 발화 (turn7 첫 프레임)
    23.84s  user  발화 끝
    23.86s  agent 발화 시작: <ret> That’s a good question to ask before committing. It's 
    25.46s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.16s]: (tool result) The neighborhood is primarily residential, with a walk s
    31.37s  agent 발화 끝
    31.64s  user  발화 시작: Is there parking available?
    32.92s  <ret> 발화 (turn9 첫 프레임)
    33.08s  agent 발화 시작: <ret> Let me check the property details for parking. Parking
    33.26s  user  발화 끝
    34.52s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.08s]: (tool result) Parking is available on-site with a monthly fee of $150.
    40.77s  agent 발화 끝
    41.40s  user  발화 시작: That's pretty expensive. What about public transportation?
    44.91s  <ret> 발화 (turn11 첫 프레임)
    45.24s  user  발화 끝
    45.30s  agent 발화 시작: <ret> Public transit is a great alternative, let's see. The 
    46.59s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.04s]: (tool result) The nearest bus stop is two blocks away on Oak Avenue.
    52.40s  user  발화 시작: Is there a grocery store nearby?
    52.53s  agent 발화 끝
    55.08s  agent 발화 시작: Well, as I was saying, there are several—
    55.13s  user  발화 끝
    57.47s  user  발화 시작: Is there a grocery store nearby? I need to know.
    58.22s  agent 발화 끝
    60.73s  <ret> 발화 (turn15 첫 프레임)
    60.89s  user  발화 끝
    60.97s  agent 발화 시작: <ret> My apologies, let me address that immediately. There’s
    61.69s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.61s]: (tool result) There is a Fresh Foods Market located 0.5 miles away.
    67.94s  user  발화 시작: Okay, good. What's the pet policy there?
    68.06s  agent 발화 끝
    70.48s  <ret> 발화 (turn17 첫 프레임)
    70.64s  agent 발화 시작: <ret> Let’s look into the pet policy for you. Pets are allow
    70.78s  user  발화 끝
    72.16s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.08s]: (tool result) Pets are allowed with a weight limit of 50 pounds and a 
    72.98s  user  발화 시작: Uh-huh.
    73.48s  user  발화 끝
    78.33s  agent 발화 끝
    78.39s  user  발화 시작: Fifty pounds… that might be tight. I— I mean, my dog is sixt
    82.51s  <ret> 발화 (turn20 첫 프레임)
    82.83s  agent 발화 시작: <ret> I understand, let's adjust that search, then. Several 
    82.83s  user  발화 끝
    83.63s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.06s]: (tool result) Several properties allow pets over 50 pounds in neighbor
    85.40s  user  발화 시작: Uh-huh.
    86.12s  user  발화 끝
    90.60s  user  발화 시작: What towns are those?
    90.70s  agent 발화 끝
    92.16s  <ret> 발화 (turn23 첫 프레임)
    92.24s  agent 발화 시작: <ret> Let me list the nearby towns with pet-friendly options
    92.35s  user  발화 끝
    94.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.34s]: (tool result) Nearby towns include Willow Creek, Oakhaven, and Riverto
    97.63s  user  발화 시작: Yeah.
    98.30s  user  발화 끝
   100.92s  agent 발화 끝
   101.46s  user  발화 시작: Tell me about Willow Creek.
   102.72s  <ret> 발화 (turn26 첫 프레임)
   102.96s  agent 발화 시작: <ret> Willow Creek is a lovely area, let’s explore it. Willo
   103.11s  user  발화 끝
   103.84s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.22s]: (tool result) Willow Creek has a population of 15,000 and a median hom
   113.33s  user  발화 시작: Are there any parks in Willow Creek?
   113.35s  agent 발화 끝
   115.34s  <ret> 발화 (turn28 첫 프레임)
   115.49s  agent 발화 시작: <ret> Parks are important, especially for pet owners. Willow
   115.68s  user  발화 끝
   115.84s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.19s]: (tool result) Willow Creek Park and Lakeside Park are both located wit
   121.03s  user  발화 시작: Uh-huh.
   121.66s  user  발화 끝
   124.16s  agent 발화 끝
   124.33s  user  발화 시작: Sounds nice. Can you show me properties in Willow Creek that
   128.89s  <ret> 발화 (turn31 첫 프레임)
   129.13s  agent 발화 시작: <ret> Absolutely, let me search for those properties. There 
   129.19s  user  발화 끝
   130.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.44s]: (tool result) Three properties match your criteria: 45 Maple Drive, 10
   140.88s  user  발화 시작: Tell me about 45 Maple Drive.
   140.92s  agent 발화 끝
   142.92s  <ret> 발화 (turn33 첫 프레임)
   143.31s  agent 발화 시작: <ret> Certainly, let’s get you the details on that property.
   143.33s  user  발화 끝
   144.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: (tool result) 45 Maple Drive is a 3-bedroom, 2-bathroom home listed fo
   151.56s  user  발화 시작: Yeah.
   152.28s  user  발화 끝
   153.98s  agent 발화 끝
   154.09s  user  발화 시작: Can we schedule a viewing for 45 Maple Drive on June twentie
   157.93s  <ret> 발화 (turn36 첫 프레임)
   158.17s  agent 발화 시작: <ret> Let's get that viewing set up for you right away. I’ve
   158.44s  user  발화 끝
   159.61s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.43s]: (tool result) A viewing at 45 Maple Drive is scheduled for June twenti
   167.56s  user  발화 시작: Perfect. Send me directions to that address too.
   167.76s  agent 발화 끝
   170.09s  <ret> 발화 (turn38 첫 프레임)
   170.33s  agent 발화 시작: <ret> Of course, directions are on their way.
   170.42s  user  발화 끝
   171.21s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.17s]: (tool result) Directions to 45 Maple Drive are: Take Highway 16 North 
   172.50s  agent 발화 끝
