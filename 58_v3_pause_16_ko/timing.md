# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "유담",
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
#       "date": "2026-05-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-10-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-06-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-05-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 혹시 ‘사운드 오브… | S2 …뮤직’에 나오는 ‘에델바이스’는 누가 불렀었는지… | S3 시오도어 비켈… 처음 들어보는 이름인데… | S4 …혹시 다른 노래도 많이 불렀어요?

     0.00s  user  발화 시작: 음… 혹시 ‘사운드 오브…
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.08s  user  발화 시작: …뮤직’에 나오는 ‘에델바이스’는 누가 불렀었는지…
     0.08s  user  발화 끝
     0.18s  agent 발화 시작: <ret> ‘에델바이스’는 천구백육십오년 영화 ‘사운드 오브 뮤직’에서 시오도어 비켈이 부르셨답니다. 정말 
     0.18s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.24s]: Theodore Bikel performed the song "Edelweiss" in the 1965 film The Sou
     0.18s  user  발화 끝
     0.32s  <ret> 발화 (turn6 첫 프레임)
     0.42s  user  발화 시작: 네.
     0.42s  agent 발화 끝
     0.44s  user  발화 시작: 시오도어 비켈… 처음 들어보는 이름인데…
     0.44s  user  발화 끝
     0.54s  user  발화 시작: …혹시 다른 노래도 많이 불렀어요?
     0.54s  user  발화 끝
     0.64s  agent 발화 시작: <ret> 시오도어 비켈은 천구백이십사년 이월 이일에 태어나 이천십오년 십이월 십칠일에 세상을 떠나신 오스트
     0.64s  ⚡SPAN 주입 [d'=0.34s / d_lead=0.34s]: (tool result) Theodore Bikel (born February 2, 1924 – died December 17
     0.64s  user  발화 끝
     0.98s  user  발화 시작: 네.
     0.98s  agent 발화 끝
     1.00s  user  발화 끝
