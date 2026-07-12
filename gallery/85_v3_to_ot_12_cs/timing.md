# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Riley",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-21",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 버커니어스가 슈퍼볼 우승했을 때 쿼터백이 누구였는 | S2 저기요, 잠깐만 여쭤볼게요. 지금 탬파의 날씨는 어떤가요? | S3 죄송하지만, 방금 습도에 대해 말씀하신 내용을 다시 한번 말씀 | S4 흠, 울렐레가 흥미로운 것 같아요. 그곳에 대해 더 자세히 알

     0.00s  user  발화 시작: 안녕하세요, 버커니어스가 슈퍼볼 우승했을 때 쿼터백이 누구였는지 궁금해요.
     4.05s  <ret> 발화 (turn1 첫 프레임)
     4.37s  agent 발화 시작: <ret> 음, 브래드 존슨이었어. 이천삼년 일월 이십육일, 슈퍼볼 삼십칠에서 레이더스를 마흔여덟대 이십일로
     4.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.55s]: Brad Johnson quarterbacked the Tampa Bay Buccaneers to a 48–21 victory
     4.37s  user  발화 끝
    10.92s  user  발화 시작: 아, 그렇군요. 음, 톰 브래디는요? 톰 브래디가 버커니어스와 함께 슈퍼볼을 몇 번이나 우승했는지 궁금해요.
    10.92s  agent 발화 끝
    18.16s  <ret> 발화 (turn3 첫 프레임)
    18.56s  agent 발화 시작: <ret> 톰 브래디는 버커니어스와 함께 슈퍼볼 딱 한 번 우승했어. 이천이십일년 이월 칠일, 슈퍼볼 오십오
    18.56s  ⚡SPAN 주입 [d'=1.68s / d_lead=10.37s]: Tom Brady won one Super Bowl with the Tampa Bay Buccaneers, leading th
    18.56s  user  발화 끝
    28.93s  user  발화 시작: 음.
    28.93s  agent 발화 끝
    29.47s  agent 발화 시작: 강력한 쿼터백이 팀의 성적을 정말 끌어올릴 수 있다는 게 얼마나 멋진지, 그렇지 않아?
    29.47s  user  발화 끝
    36.57s  user  발화 시작: 음.
    36.57s  agent 발화 끝
    37.12s  user  발화 시작: 저기요, 잠깐만 여쭤볼게요. 지금 탬파의 날씨는 어떤가요?
    37.12s  user  발화 끝
    40.70s  <ret> 발화 (turn8 첫 프레임)
    40.94s  agent 발화 시작: <ret> 지금 탬파는 기온이 삼십일 점 일도이고, 습도는 칠십팔퍼센트, 풍속은 시속 팔 점 이킬로미터야. 
    40.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.73s]: (tool result) Temperature: 31.1°C, Humidity: 78%, Wind: 8.2 km/h, Cond
    40.94s  user  발화 끝
    49.67s  user  발화 시작: 아, 듣기만 해도 좋네요…
    49.67s  agent 발화 끝
    51.85s  user  발화 시작: 죄송하지만, 방금 습도에 대해 말씀하신 내용을 다시 한번 말씀해 주시겠어요?
    51.85s  user  발화 끝
    57.31s  agent 발화 시작: 그냥 탬파의 현재 날씨를 말씀드린 건데, 습도가 칠십팔퍼센트라서 기온이 삼십일 점 일도인 만큼 꽤 더울 수 
    57.31s  user  발화 끝
    66.59s  user  발화 시작: 아, 네. 근처에 괜찮은 식당 좀 찾아주시겠어요?
    66.59s  agent 발화 끝
    70.17s  <ret> 발화 (turn13 첫 프레임)
    70.41s  agent 발화 시작: <ret> 몇 군데 찾아봤는데, 콜롬비아 레스토랑, 번스 스테이크 하우스, 울렐레, 로스터 앤 더 틸이 있어
    70.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.64s]: (tool result) Columbia Restaurant, Bern's Steak House, Ulele, Rooster 
    70.41s  user  발화 끝
    78.05s  user  발화 시작: 흠, 울렐레가 흥미로운 것 같아요. 그곳에 대해 더 자세히 알려주시겠어요?
    78.05s  agent 발화 끝
    83.35s  <ret> 발화 (turn15 첫 프레임)
    83.51s  agent 발화 시작: <ret> 울렐레는 탬파 리버워크에 위치해 있고, 플로리다 원주민 요리에서 영감을 받은 메뉴를 제공하며, 신
    83.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.92s]: Ulele is a restaurant located on the Tampa Riverwalk, offering a menu 
    83.51s  user  발화 끝
    94.43s  agent 발화 끝
