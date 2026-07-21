# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "우국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "mid 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "medication",
#       "text": "User takes medication for migraines."
#     },
#     {
#       "date": "2026-06-17",
#       "category": "sibling",
#       "text": "User has a younger sibling named Kenji."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "plant",
#       "text": "User is growing basil on the windowsill at home."
#     },
#     {
#       "date": "2026-05-21",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "bloodtype",
#       "text": "User's blood type is AB+."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "streaming",
#       "text": "User subscribes to a shared Netflix family plan."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 21°C."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "diet",
#       "text": "User is keto."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "car",
#       "text": "User drives a 2020 Kia Niro."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2025-12-22",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     },
#     {
#       "date": "2025-12-10",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 일요일 나이트 풋볼 오프닝은 누가 불러?
     2.16s  <ret> 발화 (turn1 첫 프레임)
     2.44s  agent 발화 시작: <ret> 일요일 나이트 풋볼 오프닝 테마송은 캐리 언더우드가 부릅니다. [happy] 그녀의 파워풀한 보컬
     2.58s  user  발화 끝
     2.76s  ⚡SPAN 주입 [d'=0.60s / d_lead=7.02s]: Carrie Underwood sings the opening theme song for Sunday Night Footbal
     9.46s  agent 발화 끝
