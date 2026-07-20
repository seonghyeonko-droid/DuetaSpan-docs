# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "예린",
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
#       "date": "2026-06-13",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "bloodtype",
#       "text": "User's blood type is A-."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "airline",
#       "text": "User usually flies with Cathay Pacific."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "plant",
#       "text": "User is growing a fiddle-leaf fig at home."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "music",
#       "text": "User likes listening to indie folk."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "floor",
#       "text": "User lives on the 3rd floor."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "car",
#       "text": "User drives a 2021 Tesla Model 3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-05-17",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-03-08",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2025-12-30",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: pga 투어에서 가장 많은 우승을 한 선수는 누구예요?
     2.91s  <ret> 발화 (turn1 첫 프레임)
     3.52s  agent 발화 시작: <ret> 피 지 에이 투어에서 가장 많은 우승을 한 선수는 샘 스니드 선수인데, 총 팔십이번 우승을 하셨답
     3.70s  user  발화 끝
     4.20s  ⚡SPAN 주입 [d'=1.30s / d_lead=7.46s]: Sam Snead holds the record for the most wins on the PGA Tour, with 82 
    10.98s  agent 발화 끝
