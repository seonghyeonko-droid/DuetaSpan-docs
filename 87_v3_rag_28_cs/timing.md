# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Alice",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 어 겨우 왔는데, 이번 주말에 뭐 할지 궁금해.
     4.82s  agent 발화 시작: 도착하신 걸 환영해요! 그렇게 빨리 도시를 둘러보실 생각을 하시는군요. 정말 멋지네요.
     4.82s  user  발화 끝
    11.45s  user  발화 시작: 응, 근데 좀 헤매는 것 같아. 근처에 괜찮은 박물관 있어?
    11.45s  agent 발화 끝
    17.05s  <ret> 발화 (turn3 첫 프레임)
    17.48s  agent 발화 시작: <ret> 아, 정말 좋은 박물관이 가까이에 있어요. 국립중앙박물관에는 선사시대부터 조선시대까지 한국 역사를
    17.48s  user  발화 끝
    18.05s  ⚡SPAN 주입 [d'=0.99s / d_lead=12.05s]: The National Museum of Korea houses over 400,000 artifacts and artwork
    29.53s  user  발화 시작: 사만 천 점? 그거 완전… 엄청나네. 원자 안에서 빙빙 도는 작은 것들 이름이 뭐였지? 맨날 까먹어.
    29.53s  agent 발화 끝
    38.66s  <ret> 발화 (turn5 첫 프레임)
    39.17s  agent 발화 시작: <ret> 원자를 도는 작은 것들은 전자 껍질이라고 부릅니다. 전자 껍질은 전자가 움직이는 특정한 경로, 또
    39.17s  user  발화 끝
    39.66s  ⚡SPAN 주입 [d'=0.99s / d_lead=10.24s]: Electrons orbit the nucleus of an atom in specific pathways, or energy
    49.42s  agent 발화 끝
