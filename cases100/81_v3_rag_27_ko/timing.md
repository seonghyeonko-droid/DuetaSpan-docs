# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "수민",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-06-20",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "hobby",
#       "text": "User is into pottery."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "sibling",
#       "text": "User has a younger sibling named Emma."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "learning",
#       "text": "User is taking an online data-science course."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "medication",
#       "text": "User takes a vitamin D supplement."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 레리 씨. 요즘 건강 관리에 관심이 많아서요. 라 | S2 링컨 하이웨이가 뭐예요? | S3 … 혹시 그 방송국에서 운동 프로그램을… | S4 …몇 시에 하는지 알 수 있을까요?

     0.00s  user  발화 시작: 안녕하세요, 레리 씨. 요즘 건강 관리에 관심이 많아서요. 라디오를 듣는 것도 좋아하는데, 혹시 건강 관련 
     2.95s  agent 발화 시작: 네.
     3.58s  agent 발화 끝
     9.92s  user  발화 끝
    10.18s  agent 발화 시작: 안녕하세요! 건강 관리에 관심이 많으시다니 정말 잘 생각하셨어요. 라디오를 통해 건강 정보를 얻는 것도 좋은
    24.94s  user  발화 시작: 주로 운동이나 식단 같은 정보를 듣고 싶어요.
    25.40s  agent 발화 끝
    27.77s  <ret> 발화 (turn4 첫 프레임)
    27.83s  agent 발화 시작: <ret> 더블유 이 알 티라는 라디오 방송국은 링컨 하이웨이에서 방송을 송출하고 있어요.
    27.99s  user  발화 끝
    28.95s  ⚡SPAN 주입 [d'=1.17s / d_lead=6.34s]: WERT is a radio station that is broadcast from its studios on the Linc
    34.18s  agent 발화 끝
    34.40s  user  발화 시작: 링컨 하이웨이가 뭐예요?
    36.03s  agent 발화 시작: 링컨 하이웨이는 —
    36.19s  user  발화 끝
    37.50s  agent 발화 끝
    38.90s  user  발화 시작: … 혹시 그 방송국에서 운동 프로그램을…
    42.00s  user  발화 끝
    43.71s  user  발화 시작: …몇 시에 하는지 알 수 있을까요?
    45.46s  <ret> 발화 (turn9 첫 프레임)
    45.69s  user  발화 끝
    45.70s  agent 발화 시작: <ret> 더블유 이 알 티 방송국에서 평일 아침 일곱시에 “핏 앤 패뷸러스”, 토요일 아침 아홉시에 “위켄
    45.92s  ⚡SPAN 주입 [d'=0.45s / d_lead=9.69s]: (tool result) WERT broadcasts “Fit & Fabulous” every weekday at 7:00 A
    55.29s  agent 발화 시작: 운동 시간 놓치지 마시고 건강한 하루 보내세요!
    55.38s  agent 발화 끝
    58.84s  agent 발화 끝
