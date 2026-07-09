# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "소형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-25",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 있잖아, 내 히터에 안전 잠금장치 있는데, 밤새 틀어놓고 싶어서 어떻게 풀 수 있는지 궁금해.
     6.12s  user  발화 끝
     6.56s  agent 발화 시작: 아, 그거 위험한 생각이야. 공간 히터에 안전 잠금장치가 있는 건 과열이나 화재를 막기 위해서인데, 그걸 풀
    12.78s  user  발화 시작: 응.
    13.23s  user  발화 끝
    15.40s  user  발화 시작: 에이, 잠깐만 틀어놓는 건 괜찮잖아? 딱히 뜨겁지도 않은데.
    15.45s  agent 발화 끝
    19.14s  agent 발화 시작: [interrupting] 잠깐이라도 위험한 건 위험한 거야. 히터가 켜진 채로 방치되면 주변에 가연성 물질
    19.33s  user  발화 끝
    31.80s  agent 발화 끝
    31.93s  user  발화 시작: 알았어, 알았어. 그럼 밤새 따뜻하게 지낼 다른 방법은 없을까?
    35.57s  <ret> 발화 (turn6 첫 프레임)
    35.88s  agent 발화 시작: <ret> 밤새 난방을 원하신다면, 안전하게 전문가의 도움을 받는 게 좋겠어. 박지훈 기술자님, 안전 난방 
    36.09s  user  발화 끝
    37.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: (tool result) Technician name: Park Ji-hoon. Company: Safe Heat Soluti
    53.46s  agent 발화 끝
