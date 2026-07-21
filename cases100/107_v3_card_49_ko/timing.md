# v3_card_49_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_49",
#     "name": "정별",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "skill",
#       "text": "User is just getting back into board-game design."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "emergency",
#       "text": "User's emergency contact is Elena."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "plant",
#       "text": "User is growing a few succulents at home."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "dislike",
#       "text": "User can't stand liver."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "employer",
#       "text": "User works at a game studio."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "bloodtype",
#       "text": "User's blood type is A+."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "child",
#       "text": "User has a child named Marco, age 10."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-01-31",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Looking for a therapist",
#       "bullets": [
#         "prefers evening video sessions",
#         "wants someone who does CBT"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 너무 피곤하네요. 유월 십칠일 오전 아홉시에 치과 예약이 | S2 요즘은 그림 그리는 것에 관심이 생겼어요. | S3 감사합니다. | S4 특별히 잘하는 요리는 없어요. 그냥 간단한 요리만 해요.

     0.00s  user  발화 시작: 오늘 너무 피곤하네요. 유월 십칠일 오전 아홉시에 치과 예약이 있는데, 그 전까지는 좀 쉬어야겠어요. 비용은
     8.53s  user  발화 끝
     8.67s  agent 발화 시작: 네, 기억해 둘게요. 힘든 하루 보내셨군요. 잠시라도 편히 쉬시는 게 좋겠어요.
    12.75s  user  발화 시작: 네.
    13.25s  user  발화 끝
    15.45s  user  발화 시작: 맞아요. 요즘 일 때문에 스트레스가 너무 많아서요. 뭔가 기분 전환할 만한 게 필요해요.
    15.49s  agent 발화 끝
    21.61s  user  발화 끝
    22.04s  agent 발화 시작: [happy] 스트레스 해소에는 좋아하는 음악을 듣는 것도 좋은 방법이에요. 혹시 요즘 즐겨 듣는 노래 있으
    28.95s  agent 발화 끝
    30.06s  user  발화 시작: 음… 요즘은 클래식 음악을 좀 듣고 있어요. 특히 토탈 이클립스 오브 더 하트라는 노래가 좋더라고요.
    36.29s  <ret> 발화 (turn6 첫 프레임)
    36.41s  user  발화 끝
    36.56s  agent 발화 시작: <ret> 토탈 이클립스 오브 더 하트라는 노래는 보니 타일러의 대표곡으로, 천구백팔십삼년에 발매되었고 미국
    37.08s  ⚡SPAN 주입 [d'=0.79s / d_lead=9.04s]: Bonnie Tyler released "Total Eclipse of the Heart" in 1983, and it bec
    45.40s  user  발화 시작: 아, 보니 타일러군요. 목소리가 정말 독특하죠.
    45.60s  agent 발화 끝
    49.07s  agent 발화 시작: 네, 정말 매력적인 음색이에요. [curious] 혹시 그 노래를 처음 들었던 계기가 있으세요?
    49.23s  user  발화 끝
    51.91s  user  발화 시작: 네.
    52.54s  user  발화 끝
    54.98s  user  발화 시작: 친구가 추천해 줬어요. 옛날 노래인데도 불구하고 너무 좋다고 하더라고요.
    55.10s  agent 발화 끝
    59.84s  user  발화 끝
    60.08s  agent 발화 시작: 친구분 취향이 좋으시네요. [happy] 클래식 음악과 팝 음악을 함께 즐기시는군요.
    62.97s  user  발화 시작: 예.
    63.47s  user  발화 끝
    65.96s  agent 발화 끝
    66.14s  user  발화 시작: 네, 가끔씩 분위기에 따라 듣는 게 달라요. 요즘은 좀 차분한 음악이 끌리네요.
    69.48s  agent 발화 시작: 예.
    70.11s  agent 발화 끝
    71.51s  <ret> 발화 (turn15 첫 프레임)
    71.52s  user  발화 끝
    71.67s  agent 발화 시작: <ret> 차분한 음악은 마음을 안정시키는 데 도움이 되죠. 혹시 서울에서 조용한 카페를 찾고 계신가요?
    72.77s  ⚡SPAN 주입 [d'=1.26s / d_lead=7.04s]: Cafe Onion Anguk is a popular cafe located in Anguk-dong, Seoul, known
    78.69s  agent 발화 시작: 서울의 안국동에 위치한 카페 어니언 안국은 전통적인 한국 분위기와 맛있는 페이스트리로 유명한 인기 카페예요.
    78.72s  agent 발화 끝
    81.14s  user  발화 시작: 네.
    81.78s  user  발화 끝
    86.37s  agent 발화 끝
    86.61s  user  발화 시작: 오, 안국동 카페요? 분위기가 좋을 것 같네요.
    90.63s  user  발화 끝
    90.87s  agent 발화 시작: 네, 조용하고 아늑한 분위기에서 차를 즐기기에 안성맞춤이에요.
    95.20s  user  발화 시작: 주말에 한번 가봐야겠어요. 혹시 다른 추천할 만한 곳도 있을까요?
    95.36s  agent 발화 끝
    99.46s  agent 발화 시작: [curious] 서울에는 다양한 볼거리가 많죠. 혹시 어떤 종류의 장소를 선호하시나요?
    99.56s  user  발화 끝
   101.33s  user  발화 시작: 음.
   101.74s  user  발화 끝
   105.02s  agent 발화 끝
   105.43s  user  발화 시작: 음… 미술관이나 박물관도 좋고, 공원도 좋고요.
   109.16s  <ret> 발화 (turn24 첫 프레임)
   109.42s  agent 발화 시작: <ret> 서울에는 국립중앙박물관, 예술의전당 등 훌륭한 문화 시설이 많아요.
   109.54s  user  발화 끝
   110.55s  ⚡SPAN 주입 [d'=1.39s / d_lead=5.36s]: The National Museum of Korea houses a vast collection of Korean art an
   114.76s  agent 발화 시작: 국립중앙박물관은 고대부터 현대까지 한국 미술과 유물을 소장하고 있는 방대한 컬렉션을 자랑합니다.
   114.78s  agent 발화 끝
   117.72s  user  발화 시작: 네.
   118.18s  user  발화 끝
   121.34s  user  발화 시작: 국립중앙박물관은 가봤는데 정말 좋았어요.
   121.89s  agent 발화 끝
   124.33s  agent 발화 시작: [happy] 다녀오셨다니 다행이네요. 다양한 전시물을 감상할 수 있어서 좋죠.
   124.33s  user  발화 끝
   129.70s  agent 발화 끝
   129.88s  user  발화 시작: 네, 한국 역사와 문화를 배울 수 있어서 좋았어요.
   131.36s  agent 발화 시작: 예.
   131.81s  agent 발화 끝
   133.49s  user  발화 끝
   133.74s  agent 발화 시작: [curious] 혹시 요즘 관심 있는 분야가 있으세요?
   136.19s  agent 발화 끝
   138.06s  user  발화 시작: 요즘은 그림 그리는 것에 관심이 생겼어요.
   140.83s  user  발화 끝
   140.89s  agent 발화 시작: 그림 그리기에 관심이 생기셨군요. [happy] 창작 활동은 스트레스 해소에도 도움이 될 거예요.
   147.52s  agent 발화 끝
   147.82s  user  발화 시작: 네, 힐링이 될 것 같아요. 혹시 그림을 배울 수 있는 곳을 추천해 주실 수 있나요?
   152.07s  <ret> 발화 (turn35 첫 프레임)
   152.63s  agent 발화 시작: <ret> 홍대 아트 스튜디오는 초보자부터 숙련된 예술가까지 다양한 미술 수업을 제공합니다. 그림, 드로잉,
   152.63s  user  발화 끝
   153.02s  ⚡SPAN 주입 [d'=0.95s / d_lead=9.46s]: Hongdae Art Studio offers various art classes, including painting, dra
   162.09s  agent 발화 끝
   162.23s  user  발화 시작: 홍대 아트 스튜디오요? 홍대 근처에 사니까 가기 편하겠네요.
   164.58s  agent 발화 시작: 예.
   165.22s  agent 발화 끝
   166.22s  agent 발화 시작: 네, 홍대는 젊음과 예술의 거리로 유명하죠. 다양한 볼거리와 즐길 거리가 많아요.
   166.26s  user  발화 끝
   171.31s  user  발화 시작: 맞아요.
   172.18s  user  발화 끝
   172.84s  agent 발화 끝
   172.88s  user  발화 시작: 맞아요. 데이트 코스로도 좋고요.
   175.23s  user  발화 끝
   175.33s  agent 발화 시작: [happy] 데이트 코스로도 훌륭한 선택이에요.
   177.82s  agent 발화 끝
   178.17s  user  발화 시작: 요즘 날씨가 너무 좋아서 밖으로 나가고 싶네요.
   181.26s  user  발화 끝
   181.38s  agent 발화 시작: 네, 완연한 봄 날씨가 정말 좋죠. [curious] 혹시 이번 주말에 특별한 계획이 있으신가요?
   184.02s  user  발화 시작: 네.
   184.56s  user  발화 끝
   187.96s  agent 발화 끝
   189.38s  user  발화 시작: 아직 특별한 계획은 없어요. 그냥 집에서 쉬거나, 카페에 갈까 생각 중이에요.
   192.00s  🃏 CARD 주입 (2400f, 누적 46턴 요약, 119f): appointment time: 유월 십칠일 오전 아홉시; appointment cost: 십이만원; location preference: 안국동 카페; acti
   194.58s  agent 발화 시작: [happy] 집에서 쉬면서 재충전하는 것도 좋고, 카페에서 여유로운 시간을 보내는 것도 좋죠.
   194.71s  user  발화 끝
   198.21s  user  발화 시작: 음.
   198.80s  user  발화 끝
   200.38s  user  발화 시작: 네, 둘 다 좋을 것 같아요.
   200.42s  agent 발화 끝
   202.18s  user  발화 끝
   202.41s  agent 발화 시작: [curious] 혹시 영화 보는 것도 좋아하시나요?
   204.70s  user  발화 시작: 네, 영화 보는 거 좋아해요.
   204.76s  agent 발화 끝
   206.66s  <ret> 발화 (turn51 첫 프레임)
   206.67s  agent 발화 시작: <ret> "인사이드 아웃 이"는 감정적인 깊이와 공감 가는 캐릭터로 긍정적인 평가를 받은 최근 개봉한 애니
   206.78s  user  발화 끝
   207.26s  ⚡SPAN 주입 [d'=0.60s / d_lead=8.53s]: "Inside Out 2" is a recently released animated film that has received 
   209.66s  user  발화 시작: 네.
   210.29s  user  발화 끝
   215.16s  user  발화 시작: "인사이드 아웃 이"요? 평이 좋더라고요. 한번 봐야겠네요.
   215.20s  agent 발화 끝
   219.28s  agent 발화 시작: 네, 가족과 함께 보기에도 좋은 영화예요.
   219.42s  user  발화 끝
   222.15s  agent 발화 끝
   222.17s  user  발화 시작: 맞아요. 주말에 가족과 함께 보러 가야겠어요.
   225.32s  user  발화 끝
   225.74s  agent 발화 시작: [happy] 좋은 시간 보내시길 바랍니다.
   227.50s  user  발화 시작: 감사합니다.
   227.67s  agent 발화 끝
   228.48s  agent 발화 시작: [curious] 혹시 요즘 운동도 하고 계신가요?
   228.50s  user  발화 끝
   229.41s  user  발화 시작: 네.
   230.04s  user  발화 끝
   230.93s  agent 발화 끝
   231.22s  user  발화 시작: 음… 운동은 잘 안 해요. 해야 하는데…
   235.07s  user  발화 끝
   235.14s  agent 발화 시작: 운동은 건강 유지에 필수적이죠. [happy] 가벼운 산책부터 시작하는 것도 좋은 방법이에요.
   240.81s  user  발화 시작: 네, 산책은 가끔 해요.
   240.98s  agent 발화 끝
   242.24s  <ret> 발화 (turn63 첫 프레임)
   242.56s  user  발화 끝
   242.78s  agent 발화 시작: <ret> [curious] 서울에서 산책하기 좋은 공원을 추천해 드릴까요?
   243.03s  ⚡SPAN 주입 [d'=0.78s / d_lead=3.23s]: Olympic Park is a large public park in Seoul, offering walking trails,
   245.94s  agent 발화 시작: 올림픽 공원은 서울에 있는 넓은 공원으로, 산책로, 정원, 문화 명소가 있어요.
   246.01s  agent 발화 끝
   252.30s  user  발화 시작: 올림픽 공원요? 가본 적 있는데 정말 크더라고요.
   252.66s  agent 발화 끝
   255.53s  agent 발화 시작: 네, 넓어서 산책하기에 정말 좋죠.
   255.68s  user  발화 끝
   258.49s  agent 발화 끝
   258.65s  user  발화 시작: 맞아요. 자연을 느낄 수 있어서 좋았어요.
   261.75s  user  발화 끝
   262.09s  agent 발화 시작: [happy] 자연 속에서 힐링하는 것은 정말 중요하죠.
   265.16s  user  발화 시작: 네, 그래요.
   265.19s  agent 발화 끝
   266.14s  agent 발화 시작: [curious] 혹시 요즘 스트레스 관리를 위해 특별히 하는 것이 있으신가요?
   266.16s  user  발화 끝
   269.61s  user  발화 시작: 스트레스 관리는… 잘 모르겠어요. 그냥 친구들과 수다를 떨거나, 음악을 듣거나 해요.
   269.66s  agent 발화 끝
   272.72s  agent 발화 시작: 아.
   273.35s  agent 발화 끝
   275.04s  agent 발화 시작: 친구들과 수다를 떨거나 음악을 듣는 것도 좋은 방법이에요. [happy] 자신만의 스트레스 해소법을 찾는 것
   275.11s  user  발화 끝
   279.78s  user  발화 시작: 네.
   280.41s  user  발화 끝
   282.54s  agent 발화 끝
   282.74s  user  발화 시작: 네, 맞는 말이에요.
   284.39s  user  발화 끝
   284.41s  agent 발화 시작: [curious] 혹시 요즘 관심 있는 분야가 있으신가요?
   287.04s  user  발화 시작: 요즘은 요리에 관심이 생겼어요.
   287.14s  agent 발화 끝
   289.26s  user  발화 끝
   289.53s  agent 발화 시작: 요리에 관심이 생기셨군요. [happy] 요리는 창의력을 발휘하고 맛있는 음식을 만들 수 있어서 정말 좋아요
   297.13s  agent 발화 끝
   298.26s  user  발화 시작: 네, 요리하는 게 재미있어요.
   300.05s  user  발화 끝
   300.32s  agent 발화 시작: [curious] 혹시 어떤 요리를 잘 만드시나요?
   302.72s  agent 발화 끝
   302.89s  user  발화 시작: 특별히 잘하는 요리는 없어요. 그냥 간단한 요리만 해요.
   306.59s  agent 발화 시작: 간단한 요리도 충분히 맛있을 수 있죠. [happy] 요리는 정성이 중요해요.
   306.73s  user  발화 끝
   311.92s  user  발화 시작: 네, 그래요.
   311.92s  agent 발화 끝
   312.92s  user  발화 끝
   313.00s  agent 발화 시작: [curious] 혹시 여행 가는 것을 좋아하시나요?
   314.65s  user  발화 시작: 예.
   315.19s  user  발화 끝
   315.45s  agent 발화 끝
   315.87s  user  발화 시작: 네, 여행 가는 거 정말 좋아해요.
   318.08s  user  발화 끝
   318.53s  agent 발화 시작: 여행은 새로운 경험을 하고 세상을 보는 시야를 넓혀주는 좋은 기회죠. [happy] 최근에 가고 싶었던 곳이
   323.35s  user  발화 시작: 네.
   323.99s  user  발화 끝
   325.94s  user  발화 시작: 음… 요즘은 제주도에 가고 싶어요.
   325.99s  agent 발화 끝
   328.90s  user  발화 끝
   329.14s  agent 발화 시작: 제주도는 아름다운 자연경관과 다양한 볼거리가 있는 곳이죠. [happy] 힐링하기에 정말 좋은 곳이에요.
   335.61s  user  발화 시작: 맞아요. 바다도 보고, 맛있는 음식도 먹고 싶어요.
   335.90s  agent 발화 끝
   339.95s  user  발화 끝
   340.04s  <ret> 발화 (turn92 첫 프레임)
   340.08s  agent 발화 시작: <ret> [curious] 혹시 제주도에서 특별히 가보고 싶은 곳이 있으신가요?
   341.04s  ⚡SPAN 주입 [d'=1.01s / d_lead=3.38s]: Seongsan Ilchulbong Peak is a volcanic crater on Jeju Island, offering
   343.43s  agent 발화 시작: 성산일출봉은 제주도에 있는 화산 분화구로, 멋진 일출을 감상할 수 있어요.
   343.46s  agent 발화 끝
   345.17s  user  발화 시작: 네.
   345.67s  user  발화 끝
   349.50s  agent 발화 끝
   350.17s  user  발화 시작: 성산일출봉요? 사진으로 봤는데 정말 멋있더라고요.
   354.62s  user  발화 끝
   354.93s  agent 발화 시작: 네, 직접 가서 보시면 더욱 감동적일 거예요.
   356.70s  user  발화 시작: 네.
   357.33s  user  발화 끝
   357.92s  user  발화 시작: 맞아요. 꼭 한번 가보고 싶어요.
   358.12s  agent 발화 끝
   360.83s  user  발화 끝
   361.29s  agent 발화 시작: [happy] 즐거운 여행 되시길 바랍니다.
   363.08s  user  발화 시작: 감사합니다. 아, 제가 치과 예약한 날짜가 언제였죠?
   363.55s  agent 발화 끝
   366.65s  agent 발화 시작: 유월 십칠일입니다.
   366.74s  user  발화 끝
   368.27s  agent 발화 끝
   368.31s  user  발화 시작: 아, 맞네요. 그때 시간은 몇 시였죠?
   371.27s  agent 발화 시작: 오전 아홉시입니다.
   371.32s  user  발화 끝
   372.57s  user  발화 시작: 네, 알겠습니다. 감사합니다.
   372.69s  agent 발화 끝
   374.46s  agent 발화 시작: [happy] 도움이 되어서 기쁩니다.
   374.54s  user  발화 끝
   376.21s  agent 발화 끝
