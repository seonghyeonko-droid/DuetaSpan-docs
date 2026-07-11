# v3_mem_36_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "윤아",
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
#       "date": "2025-12-27",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 요즘 좀 답답해요. 뭔가 새로운 자극이 필요한 것 같아요 | S2 응, 아직 생각하고 있어. 근데 베트남에 대해서 아는 게 별로 | S3 음… 저는 맛있는 음식을 먹는 걸 좋아하고, 예쁜 풍경을 보는 | S4 오, 좋아요. 한번 알아봐야겠네요. 고마워요, 파미.

     0.00s  agent 발화 시작: 안녕하세요, 윤아님. 저는 파미예요. 오늘 하루는 어떠셨어요?
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.04s  user  발화 시작: 응.
     0.04s  agent 발화 끝
     0.05s  user  발화 시작: 음… 요즘 좀 답답해요. 뭔가 새로운 자극이 필요한 것 같아요.
     0.05s  user  발화 끝
     0.11s  agent 발화 시작: 새로운 자극이라… 마음이 조금 지쳐있으신 것 같네요. 혹시 지금 떠오르는 건 없으세요?
     0.11s  user  발화 끝
     0.18s  user  발화 시작: 글쎄요… 여행을 가고 싶은데, 어디로 가야 할지 모르겠어요.
     0.18s  agent 발화 끝
     0.23s  agent 발화 시작: <ret> 전에 말씀하신 대로, 오월에 베트남 여행을 계획하고 계셨죠? 혹시 그때 계획은 아직 유효하신가요?
     0.23s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: User is planning a trip to Vietnam in May.
     0.23s  user  발화 끝
     0.31s  user  발화 시작: 와.
     0.31s  agent 발화 끝
     0.31s  user  발화 시작: 응, 아직 생각하고 있어. 근데 베트남에 대해서 아는 게 별로 없어서…
     0.31s  user  발화 끝
     0.38s  agent 발화 시작: 베트남은 정말 매력적인 곳이죠. 어떤 스타일의 여행을 좋아하시나요? 조용히 휴식을 취하는 걸 선호하시는지, 
     0.38s  user  발화 끝
     0.41s  <ret> 발화 (turn11 첫 프레임)
     0.43s  <ret> 발화 (turn14 첫 프레임)
     0.49s  user  발화 시작: 응.
     0.49s  agent 발화 끝
     0.50s  user  발화 시작: 음… 저는 맛있는 음식을 먹는 걸 좋아하고, 예쁜 풍경을 보는 것도 좋아해요.
     0.50s  user  발화 끝
     0.57s  agent 발화 시작: <ret> 태국 음식 좋아하시는 걸로 알고 있는데, 베트남 음식도 정말 맛있답니다. 특히 현지 식재료로 만든
     0.57s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: User's favorite cuisine is Thai.
     0.57s  user  발화 끝
     0.70s  user  발화 시작: 아.
     0.70s  agent 발화 끝
     0.70s  user  발화 시작: 아, 정말요? 그럼 혹시 베트남에서 추천하는 음식점이 있을까요?
     0.70s  user  발화 끝
     0.75s  agent 발화 시작: <ret> 하노이에 있는 포 십 리 꿟 수라는 식당은 평점이 사 점 오점이고, 가격은 십달러에서 이십달러 사
     0.75s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: (tool result) Restaurant: Pho 10 Ly Quoc Su, Hanoi; Rating: 4.5 stars;
     0.75s  user  발화 끝
     0.87s  user  발화 시작: 오, 좋아요. 한번 알아봐야겠네요. 고마워요, 파미.
     0.87s  agent 발화 끝
     0.91s  agent 발화 시작: 천만에요, 윤아님. 언제든 편하게 말씀해 주세요. 작은 변화가 큰 영감을 줄 수 있다는 걸 기억하세요.
     0.91s  user  발화 끝
     1.00s  agent 발화 끝
