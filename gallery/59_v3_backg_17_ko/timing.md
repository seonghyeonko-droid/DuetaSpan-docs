# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "정별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-23",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 미국 내전 때문에 분리된 주는 어디야? | S2 그 당시 노예제는 얼마나 심각한 문제였어? | S3 … 그게 웨스트버지니아 분리에 직접적인 영향을 줬어? | S4 알겠어. 다른 주들도 비슷한 이유로 분리된 적이 있어?

     0.00s  user  발화 시작: 미국 내전 때문에 분리된 주는 어디야?
     3.03s  <ret> 발화 (turn1 첫 프레임)
     3.19s  agent 발화 시작: <ret> 미국 내전 중에 연방에서 탈퇴하지 않은 버지니아주의 일부 지역에서 웨스트버지니아가 주가 되었어요.
     3.19s  ⚡SPAN 주입 [d'=0.50s / d_lead=10.62s]: West Virginia became a state during the American Civil War, forming fr
     3.19s  user  발화 끝
    13.80s  user  발화 시작: 음… 그 내전이 왜 일어났는지 좀 더 자세히 알려줄 수 있어?
    13.80s  agent 발화 끝
    19.40s  <ret> 발화 (turn3 첫 프레임)
    19.64s  agent 발화 시작: <ret> 천팔백육십일년 섬터 요새에 대한 남부 연합의 공격으로 미국 내전이 시작되었는데, 주로 노예제와 주
    19.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.56s]: The American Civil War began in 1861 with the Confederate attack on Fo
    19.64s  user  발화 끝
    29.20s  user  발화 시작: 응.
    29.20s  agent 발화 끝
    29.73s  user  발화 시작: 그 당시 노예제는 얼마나 심각한 문제였어?
    29.73s  user  발화 끝
    32.68s  <ret> 발화 (turn6 첫 프레임)
    32.92s  agent 발화 시작: <ret> 천팔백육십년에는 미국에 약 사백만 명의 노예가 살고 있었는데, 이는 전체 인구의 약 십삼퍼센트를 
    32.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.03s]: By 1860, approximately 4 million enslaved people lived in the United S
    32.92s  user  발화 끝
    41.94s  user  발화 시작: — 잠깐만, 웨스트버지니아는 정확히 언제 주가 되었어?
    41.94s  agent 발화 끝
    45.66s  user  발화 시작: … 그게 웨스트버지니아 분리에 직접적인 영향을 줬어?
    45.66s  user  발화 끝
    49.05s  <ret> 발화 (turn9 첫 프레임)
    49.37s  agent 발화 시작: <ret> 웨스트버지니아는 천팔백육십삼년 유월 이십일에 헌법 회의와 버지니아 입법부의 승인을 거쳐 연방의 삼
    49.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.43s]: West Virginia was admitted to the Union as the 35th state on June 20, 
    49.37s  user  발화 끝
    56.81s  user  발화 시작: 버지니아 입법부의 승인이 있었다고? 그게 말이 돼?
    56.81s  agent 발화 끝
    60.20s  <ret> 발화 (turn11 첫 프레임)
    60.52s  agent 발화 시작: <ret> 웨스트버지니아의 주로서의 과정은 법적으로 복잡했는데, 버지니아 입법부는 처음에는 탈퇴를 무효로 선
    60.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.49s]: The West Virginia statehood process was legally complex, with the Virg
    60.52s  user  발화 끝
    69.02s  user  발화 시작: 알겠어. 다른 주들도 비슷한 이유로 분리된 적이 있어?
    69.02s  agent 발화 끝
    73.19s  <ret> 발화 (turn13 첫 프레임)
    73.27s  agent 발화 시작: <ret> 웨스트버지니아와 같은 방식으로 미국 내전의 직접적인 결과로 분리된 다른 주는 없지만, 전쟁 이후 
    73.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.56s]: No other U.S. state was directly formed as a result of the Civil War i
    73.27s  user  발화 끝
    82.82s  agent 발화 끝
