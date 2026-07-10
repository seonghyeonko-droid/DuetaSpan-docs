# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "은경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-16",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-11-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-23",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 정신건강연구소가 언제 세워졌는지 궁금해. | S2 음, 그 연구소가 그렇게 오래됐구나. | S3 아, 잠깐만, 그 연구소가…— | S4 …그 연구소가 지금도 계속 운영 중이야?

     0.00s  user  발화 시작: 정신건강연구소가 언제 세워졌는지 궁금해.
     2.95s  user  발화 끝
     2.98s  <ret> 발화 (turn1 첫 프레임)
     3.22s  agent 발화 시작: <ret> 정신건강연구소는 처음으로 천구백사십구년 사월 십오일에 설립되었답니다. 마음의 건강에 관심을 가져주
     3.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.91s]: The National Institute of Mental Health was first established on April
    12.09s  user  발화 시작: 음, 그 연구소가 그렇게 오래됐구나.
    12.12s  agent 발화 끝
    14.15s  agent 발화 시작: 네, 오랜 역사를 가지고 있어요.
    14.22s  user  발화 끝
    16.30s  user  발화 시작: 아, 잠깐만, 그 연구소가…—
    16.36s  agent 발화 끝
    18.33s  user  발화 시작: …그 연구소가 지금도 계속 운영 중이야?
    18.41s  user  발화 끝
    20.44s  <ret> 발화 (turn6 첫 프레임)
    20.73s  user  발화 끝
    20.76s  agent 발화 시작: <ret> 정신건강연구소는 현재도 선도적인 연구 기관으로 계속 운영되고 있습니다. 꾸준히 연구를 이어가고 있
    20.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: The National Institute of Mental Health remains a leading research ins
    25.40s  user  발화 시작: 음.
    25.75s  user  발화 끝
    28.50s  agent 발화 끝
