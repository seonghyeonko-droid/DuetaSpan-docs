# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Leo",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "home",
#       "text": "User's home address is 197 Oak Avenue."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 인도 테스트 크리켓에서 처음으로 트리플 센추리 기 | S2 어머, 몰랐어요. 저기, 아내가 제가 쓰레기 버렸는지 기억하는 | S3 여보, 쓰레기 버렸어요? | S4 …됐어요. 혹시 지금 서울 날씨는 어때요?

     0.00s  user  발화 시작: 안녕하세요. 인도 테스트 크리켓에서 처음으로 트리플 센추리 기록한 타자가 누구였는지 궁금합니다.
     6.19s  <ret> 발화 (turn1 첫 프레임)
     6.47s  agent 발화 시작: <ret> 아, 비렌더 세와그 선수였어요. 실제로 파키스탄과의 경기에서 이천사년에 역사를 만들었답니다. 정말
     6.47s  user  발화 끝
     6.49s  ⚡SPAN 주입 [d'=0.30s / d_lead=8.23s]: Virender Sehwag was the first Indian batsman to score a triple century
    14.70s  user  발화 시작: 오.
    14.70s  agent 발화 끝
    15.29s  user  발화 시작: 어머, 몰랐어요. 저기, 아내가 제가 쓰레기 버렸는지 기억하는지 물어보네요…
    15.29s  user  발화 끝
    20.58s  user  발화 시작: 여보, 쓰레기 버렸어요?
    20.58s  user  발화 끝
    22.35s  user  발화 시작: …됐어요. 혹시 지금 서울 날씨는 어때요?
    22.35s  user  발화 끝
    25.51s  <ret> 발화 (turn6 첫 프레임)
    25.87s  agent 발화 시작: <ret> 네, 지금 서울은 섭씨 이십육도이고 습도는 육십팔퍼센트, 그리고 시속 사킬로미터의 바람이 불고 있
    25.87s  user  발화 끝
    27.01s  ⚡SPAN 주입 [d'=1.50s / d_lead=10.58s]: (tool result) Current conditions in Seoul are 26.0°C, humidity 68%, wi
    36.46s  user  발화 시작: 정말요?
    36.46s  agent 발화 끝
    37.05s  agent 발화 시작: 새로운 것에 집중하면 주의가 바뀌는 것 같아요. 흥미롭지 않나요?
    37.05s  user  발화 끝
    42.34s  agent 발화 끝
