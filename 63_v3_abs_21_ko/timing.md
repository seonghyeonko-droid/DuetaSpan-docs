# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "소원",
#     "location": {
#       "city": "Busan",
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
#       "date": "2025-12-27",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-04",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-23",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-05-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 조상 찾기 기록은 얼마나 오래 전까지 남아있나요? | S2 FamilySearch는요? | S3 그럼 그쪽 기록은 얼마나 오래됐을까요? | S4 …근데 제가 한국 조상을 찾고 싶은데, 혹시 한국 기록도 많이

     0.00s  user  발화 시작: 조상 찾기 기록은 얼마나 오래 전까지 남아있나요?
     3.06s  <ret> 발화 (turn1 첫 프레임)
     3.29s  agent 발화 시작: <ret> 음, 안타깝게도 현재로서는 Ancestry.com이 가계도 조사를 위해 얼마나 오래된 기록을 보유
     3.30s  ⚡SPAN 주입 [d'=0.64s / d_lead=7.74s]: (no information found)
     3.52s  user  발화 끝
     6.95s  user  발화 시작: 그래.
     7.40s  user  발화 끝
    11.03s  agent 발화 끝
    11.39s  user  발화 시작: 아, 그렇군요. 그럼 다른 사이트는 어때요?
    14.06s  user  발화 끝
    14.41s  agent 발화 시작: 다른 가계도 웹사이트들은 기록 보관 기간이 조금씩 다른 경우가 많아요. 어떤 사이트를 염두에 두고 계신가요?
    20.65s  agent 발화 끝
    20.79s  user  발화 시작: FamilySearch는요?
    21.51s  <ret> 발화 (turn6 첫 프레임)
    21.82s  agent 발화 시작: <ret> FamilySearch는 예수 그리스도 후기 성도 교회에서 운영하는 비영리 가계도 단체인데, 수세
    21.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: FamilySearch is a nonprofit genealogy organization operated by The Chu
    22.07s  user  발화 끝
    26.59s  user  발화 시작: 응.
    26.89s  user  발화 끝
    30.21s  agent 발화 끝
    31.11s  user  발화 시작: 그럼 그쪽 기록은 얼마나 오래됐을까요?
    33.01s  <ret> 발화 (turn9 첫 프레임)
    33.17s  agent 발화 시작: <ret> 기록의 범위는 상당히 넓어서— 기록은 수세기에 걸쳐 있는데, 특히 천오백년대부터 상당한 양의 자료
    33.37s  user  발화 끝
    33.89s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.76s]: FamilySearch records span centuries, with significant collections dati
    41.90s  user  발화 시작: …근데 제가 한국 조상을 찾고 싶은데, 혹시 한국 기록도 많이 있나요?
    41.97s  agent 발화 끝
    46.16s  user  발화 끝
    46.16s  agent 발화 시작: 네, FamilySearch는 한국 기록도 상당량 보유하고 있어요. 한국의 고문서나 호적 같은 자료들을 찾아
    52.05s  agent 발화 끝
