# v3_card_45_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_card_45",
#     "name": "주서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "employer",
#       "text": "User works at a regional bank."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "bloodtype",
#       "text": "User's blood type is AB-."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "trip",
#       "text": "User is planning a trip to Jordan in November."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "learning",
#       "text": "User is studying Japanese."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "dish",
#       "text": "User's go-to comfort dish is butter chicken."
#     },
#     {
#       "date": "2026-01-14",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "music",
#       "text": "User likes listening to classical piano."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cold brew."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-03-29",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-03-11",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2025-12-27",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 다음 주 화요일에 병원 예약이 있어요. | S2 혹시 서울에서 분위기 좋은 카페 아세요? | S3 아, 병원 예약 시간이 얼마 남지 않았네요. | S4 휴식을 취하고 싶지만, 시간이 없어요.

     0.00s  user  발화 시작: 다음 주 화요일에 병원 예약이 있어요.
     3.09s  agent 발화 시작: 네, 기억해 둘게요.
     3.24s  user  발화 끝
     4.80s  user  발화 시작: 그리고 그날 아침 여덟시 십오분에 진료를 받기로 했어요.
     4.84s  agent 발화 끝
     9.01s  user  발화 끝
     9.48s  agent 발화 시작: 네, 알겠습니다. 여덟시 십오분으로 기록해 두었어요.
    14.16s  agent 발화 끝
    16.51s  user  발화 시작: 진료비는 십육만 오천원 정도 들 것 같아요.
    20.12s  user  발화 끝
    20.23s  agent 발화 시작: 네, 십육만 오천원으로 기억해 두겠습니다.
    23.60s  agent 발화 끝
    23.68s  user  발화 시작: 아니요, 괜찮아요. 그냥 삼총사 영화에 대해 얘기하고 싶었어요.
    29.56s  agent 발화 시작: 삼총사 영화요? 어떤 점이 궁금하신가요?
    29.61s  user  발화 끝
    32.93s  agent 발화 끝
    32.96s  user  발화 시작: 촬영 중에 사망한 배우가 있었나요?
    35.85s  <ret> 발화 (turn9 첫 프레임)
    36.08s  agent 발화 시작: <ret> 촬영 중에 안타깝게도 배우 한 분이 돌아가셨어요. 바로 로이 미첼 키니어 님입니다.
    36.20s  user  발화 끝
    37.04s  ⚡SPAN 주입 [d'=1.19s / d_lead=6.71s]: Roy Mitchell Kinnear, a British character actor, died on September 30,
    42.32s  user  발화 시작: 아, 정말 안타깝네요. 그 배우는 어떤 영화에 출연했었나요?
    42.79s  agent 발화 끝
    48.19s  agent 발화 시작: 로이 미첼 키니어 님은 여러 영화에 출연했는데, 코미디 영화에서 주로 활동하셨다고 해요.
    48.29s  user  발화 끝
    51.31s  user  발화 시작: 네.
    51.89s  user  발화 끝
    53.98s  agent 발화 끝
    55.93s  user  발화 시작: 코미디 영화요? 어떤 영화가 유명한가요?
    59.45s  <ret> 발화 (turn14 첫 프레임)
    59.85s  agent 발화 시작: <ret> 로이 미첼 키니어 님은 *헬프!*, *핑크 팬더*, 그리고 *찰리와 초콜릿 공장*에서 특히 유명한
    60.05s  user  발화 끝
    60.72s  ⚡SPAN 주입 [d'=1.27s / d_lead=8.06s]: Roy Kinnear is best known for his roles in films such as *Help!*, *The
    67.91s  agent 발화 끝
    68.05s  user  발화 시작: 아, *찰리와 초콜릿 공장*! 그 영화 정말 재미있게 봤어요.
    74.40s  user  발화 끝
    74.43s  agent 발화 시작: 저도 그 영화 정말 좋아해요. [happy] 상상력이 풍부한 영화죠.
    79.05s  agent 발화 끝
    80.14s  user  발화 시작: 맞아요. 요즘 볼만한 영화 없을까요?
    84.45s  user  발화 끝
    84.59s  agent 발화 시작: 어떤 장르를 좋아하시나요?
    86.65s  agent 발화 끝
    86.91s  user  발화 시작: 음… 코미디나 로맨틱 코미디 정도요.
    90.57s  <ret> 발화 (turn20 첫 프레임)
    90.60s  agent 발화 시작: <ret> 현재 서울에서 상영 중인 영화는 픽사의 애니메이션 *엘리멘탈*과 *미션 임파서블: 데드 레코닝 P
    90.75s  user  발화 끝
    91.58s  ⚡SPAN 주입 [d'=1.01s / d_lead=8.57s]: Currently showing in Seoul are "Elemental", a Pixar animated film, and
    99.11s  user  발화 시작: *엘리멘탈*은 평점이 좋은가요?
    99.17s  agent 발화 끝
   101.69s  user  발화 끝
   101.92s  agent 발화 시작: 네, 평점이 상당히 좋은 편이에요.
   104.31s  agent 발화 끝
   104.56s  user  발화 시작: 한번 볼까 생각 중이에요.
   107.06s  agent 발화 시작: 좋은 선택이에요. [happy] 가족과 함께 보기에 좋을 것 같아요.
   107.15s  user  발화 끝
   110.35s  user  발화 시작: 음.
   110.99s  user  발화 끝
   111.41s  agent 발화 끝
   111.59s  user  발화 시작: 혹시 서울에서 분위기 좋은 카페 아세요?
   114.76s  <ret> 발화 (turn27 첫 프레임)
   114.97s  user  발화 끝
   115.24s  agent 발화 시작: <ret> 서울에는 분위기 좋은 카페가 많은데요, 그중에서도 카페 어니언 각은 전통적인 한국 건축 양식과 맛
   115.98s  ⚡SPAN 주입 [d'=1.22s / d_lead=9.92s]: Cafe Onion Anguk is a popular cafe in Seoul, known for its traditional
   125.12s  user  발화 시작: 카페 어니언 각이요? 어디에 있어요?
   125.16s  agent 발화 끝
   128.96s  user  발화 끝
   129.10s  agent 발화 시작: 종로구 낙원동에 위치해 있어요.
   131.31s  user  발화 시작: 아, 가본 적 있어요. 좀 멀리 떨어진 곳에 있잖아요.
   131.36s  agent 발화 끝
   136.83s  agent 발화 시작: 네, 조금 외곽에 있는 편이죠.
   136.86s  user  발화 끝
   138.91s  agent 발화 끝
   140.34s  user  발화 시작: 그럼 좀 더 가까운 곳에 없을까요?
   143.68s  <ret> 발화 (turn33 첫 프레임)
   143.76s  user  발화 끝
   143.81s  agent 발화 시작: <ret> 종로에 있는 그린 카페도 분위기가 좋고 다양한 차를 즐길 수 있어요.
   144.93s  ⚡SPAN 주입 [d'=1.24s / d_lead=4.72s]: Greem Cafe in Jongno is a popular cafe known for its relaxing atmosphe
   145.42s  user  발화 시작: 네.
   146.24s  user  발화 끝
   148.53s  agent 발화 끝
   149.73s  user  발화 시작: 그린 카페요? 한번 가봐야겠네요.
   153.56s  user  발화 끝
   153.72s  agent 발화 시작: 네, 한번 방문해 보세요. [happy] 마음에 드실 거예요.
   157.60s  agent 발화 끝
   159.16s  user  발화 시작: 요즘 날씨가 너무 덥네요.
   161.91s  agent 발화 시작: 네, 정말 덥네요. 오늘 서울의 최고 기온은 삼십이도까지 올라갈 거라고 합니다.
   161.99s  user  발화 끝
   166.15s  user  발화 시작: 예.
   166.78s  user  발화 끝
   167.64s  agent 발화 끝
   168.15s  user  발화 시작: 에어컨 없이는 살 수 없겠어요.
   170.77s  agent 발화 시작: 정말 그렇죠. [sigh] 더위에 조심하세요.
   170.93s  user  발화 끝
   174.70s  agent 발화 끝
   176.15s  user  발화 시작: 맞아요. 혹시 이번 주말에 갈만한 곳 없을까요?
   180.50s  <ret> 발화 (turn43 첫 프레임)
   180.93s  agent 발화 시작: <ret> 이번 주말에는 서울숲에 가보는 건 어떠세요? 성동구에 위치한 넓은 공원으로 산책로와 정원, 문화 
   181.10s  user  발화 끝
   181.63s  ⚡SPAN 주입 [d'=1.13s / d_lead=9.32s]: The Seoul Forest is a large park in Seongdong-gu, Seoul, offering walk
   190.24s  agent 발화 끝
   190.93s  user  발화 시작: 서울숲요? 거긴 한 번도 가본 적 없어요.
   192.00s  🃏 CARD 주입 (2400f, 누적 45턴 요약, 121f): appointment: 다음 주 화요일; appointment time: 아침 여덟시 십오분; medical cost: 십육만 오천원; weekend plan: 
   195.28s  user  발화 끝
   195.41s  agent 발화 시작: 네, 한 번 가보시면 좋을 거예요.
   197.39s  agent 발화 끝
   197.54s  user  발화 시작: 거기 주차하기 어렵나요?
   199.65s  agent 발화 시작: 네, 주차 공간이 부족할 수 있습니다. 대중교통을 이용하는 것이 편리할 것 같아요.
   199.76s  user  발화 끝
   203.07s  user  발화 시작: 음.
   203.61s  user  발화 끝
   205.11s  user  발화 시작: 알겠습니다. 대중교통을 이용해야겠네요.
   205.21s  agent 발화 끝
   209.38s  agent 발화 시작: 네, 그렇게 하시는 게 좋을 것 같아요.
   209.46s  user  발화 끝
   211.83s  agent 발화 끝
   212.10s  user  발화 시작: 아, 병원 예약 시간이 얼마 남지 않았네요.
   216.21s  agent 발화 시작: 네, 시간이 다 되어 갑니다.
   216.26s  user  발화 끝
   218.14s  agent 발화 끝
   218.53s  user  발화 시작: 그날 아침에 택시를 타야 하는데, 괜찮을까요?
   222.97s  user  발화 끝
   223.03s  agent 발화 시작: 네, 택시를 타셔도 괜찮습니다. 다만, 출근 시간이라 교통 체증이 심할 수 있습니다.
   229.47s  agent 발화 끝
   229.73s  user  발화 시작: 아, 맞아요. 교통 체증 때문에 늦을 수도 있겠네요.
   234.68s  user  발화 끝
   235.14s  agent 발화 시작: 네, 조금 일찍 출발하시는 것이 좋겠습니다.
   237.36s  user  발화 시작: 그렇죠.
   238.47s  agent 발화 끝
   238.56s  user  발화 끝
   238.57s  user  발화 시작: 늦지 않도록 조심해야겠어요.
   240.91s  agent 발화 시작: 네, 조심하세요.
   241.06s  user  발화 끝
   242.33s  agent 발화 끝
   242.35s  user  발화 시작: 혹시… 제가 병원 예약한 시간이 몇 시였죠?
   246.56s  user  발화 끝
   246.59s  agent 발화 시작: 십일월 십일 오전 여덟시 십오분입니다.
   249.77s  agent 발화 끝
   249.96s  user  발화 시작: 아, 맞다. 기억이 안 났어요.
   254.56s  agent 발화 시작: 네, 기억이 안 나실 수도 있죠.
   254.68s  user  발화 끝
   256.96s  agent 발화 끝
   257.12s  user  발화 시작: 혹시… 진료비가 얼마였죠?
   260.08s  agent 발화 시작: 십육만 오천원입니다.
   260.08s  user  발화 끝
   262.01s  agent 발화 끝
   262.84s  user  발화 시작: 아, 네, 맞아요.
   265.33s  user  발화 끝
   265.58s  agent 발화 시작: 네, 기억해 두셔서 다행입니다.
   267.98s  agent 발화 끝
   268.55s  user  발화 시작: 다시 한번 확인해서 다행이에요.
   271.50s  user  발화 끝
   271.62s  agent 발화 시작: 네, 언제든지 다시 물어보세요.
   273.69s  agent 발화 끝
   273.86s  user  발화 시작: 요즘 스트레스가 너무 많아요.
   276.44s  user  발화 끝
   276.76s  agent 발화 시작: 힘든 일이 많으신가 봐요.
   278.61s  agent 발화 끝
   279.34s  user  발화 시작: 네, 회사 일이 너무 바빠서…
   282.11s  user  발화 끝
   282.21s  agent 발화 시작: 회사 일이 힘드시군요. 잠시 휴식을 취하는 것도 좋을 것 같아요.
   287.72s  agent 발화 끝
   287.85s  user  발화 시작: 휴식을 취하고 싶지만, 시간이 없어요.
   291.86s  agent 발화 시작: 시간이 없으시군요. 그래도 틈틈이 스트레스를 푸는 방법을 찾으시는 게 중요합니다.
   291.92s  user  발화 끝
   297.76s  user  발화 시작: 네, 노력해 볼게요.
   297.88s  agent 발화 끝
   300.06s  agent 발화 시작: 네, 힘내세요.
   300.21s  user  발화 끝
   301.81s  agent 발화 끝
   302.08s  user  발화 시작: 혹시 서울에서 마사지 잘하는 곳 아세요?
   305.18s  <ret> 발화 (turn79 첫 프레임)
   305.48s  agent 발화 시작: <ret> 서울 신라호텔 스파는 고급스러운 환경에서 다양한 마사지 트리트먼트와 스파 서비스를 제공합니다.
   305.60s  user  발화 끝
   306.10s  ⚡SPAN 주입 [d'=0.92s / d_lead=7.41s]: The Spa at Shilla Seoul offers a range of massage treatments and spa s
   308.54s  user  발화 시작: 예.
   309.13s  user  발화 끝
   312.89s  agent 발화 끝
   313.06s  user  발화 시작: 신라호텔 스파요? 가격이 비싸지 않을까요?
   316.74s  agent 발화 시작: 네, 가격대가 조금 높은 편입니다.
   316.80s  user  발화 끝
   319.28s  agent 발화 끝
   319.64s  user  발화 시작: 그럼 좀 더 저렴한 곳 없을까요?
   321.81s  <ret> 발화 (turn84 첫 프레임)
   322.23s  agent 발화 시작: <ret> 용산구에 있는 타이 오키드 마사지는 합리적인 가격으로 태국 마사지를 받을 수 있습니다.
   322.42s  user  발화 끝
   323.29s  ⚡SPAN 주입 [d'=1.47s / d_lead=5.74s]: Thai Orchid Massage in Yongsan-gu offers affordable Thai massage treat
   325.58s  user  발화 시작: 예.
   326.21s  user  발화 끝
   327.97s  agent 발화 끝
   328.03s  user  발화 시작: 타이 오키드 마사지요? 한번 알아봐야겠네요.
   332.51s  user  발화 끝
   332.62s  agent 발화 시작: 네, 한번 알아보세요.
   334.22s  agent 발화 끝
   334.82s  user  발화 시작: 아, 삼총사 영화 얘기하다가 딴 얘기로 너무 빠졌네요.
   339.15s  agent 발화 시작: 네, 그러네요. —
   339.26s  user  발화 끝
   340.53s  user  발화 시작: 혹시 그 영화에 또 다른 배우 중에 유명한 사람 있었나요?
   341.13s  agent 발화 끝
   343.37s  agent 발화 시작: 네.
   343.87s  agent 발화 끝
   344.97s  agent 발화 시작: 네, 영화 *삼총사*에는 올리버 리드와 프랜시스 레이가 출연했습니다.
   345.01s  user  발화 끝
   347.61s  user  발화 시작: 네.
   348.29s  user  발화 끝
   350.61s  agent 발화 끝
   351.44s  user  발화 시작: 아, 올리버 리드요? 그 배우는 어떤 영화에 출연했었나요?
   356.92s  agent 발화 시작: 올리버 리드 님은 *로마 제국 쇠망사*와 *글래디에이터*에서 인상적인 연기를 보여주셨습니다.
   357.04s  user  발화 끝
   363.66s  user  발화 시작: 아, *글래디에이터*! 그 영화 정말 감동적이었어요.
   363.78s  agent 발화 끝
   368.67s  user  발화 끝
   368.90s  agent 발화 시작: 네, 정말 명작이죠.
   370.69s  agent 발화 끝
   370.79s  user  발화 시작: 오늘 얘기 너무 즐거웠어요.
   373.42s  user  발화 끝
   373.59s  agent 발화 시작: 저도 즐거웠습니다.
   375.25s  agent 발화 끝
