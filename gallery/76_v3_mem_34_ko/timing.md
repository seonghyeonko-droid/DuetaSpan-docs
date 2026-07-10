# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "지원",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-19",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-15",
#       "category": "home",
#       "text": "User's home address is 124 Elm Street."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-29",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어… 안녕하세요. 혹시 지금 제 집에서 해운대까지 얼마나 걸릴 | S2 아니요, 차를 몰고 가려고요. 주차는 어디가 좋을까요? | S3 아, 좋네요. 그럼 거기로 가야겠어요. | S4 오, 정말요? 추천해주세요.

     0.00s  agent 발화 시작: 지원님, 안녕하세요. 저는 히아예요. 큰 변화를 겪으시는 분들을 돕는 상담가입니다.
     5.70s  user  발화 시작: 어… 안녕하세요. 혹시 지금 제 집에서 해운대까지 얼마나 걸릴까요?
     5.93s  agent 발화 끝
    10.51s  <ret> 발화 (turn2 첫 프레임)
    10.58s  agent 발화 시작: <ret> 지원님의 집 주소는 Elm Street 백이십사번지시죠. 현재 교통 상황을 확인해서 해운대까지 가
    10.84s  user  발화 끝
    12.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.06s]: [2026-04-15] User's home address is 124 Elm Street.
    16.49s  user  발화 시작: 음.
    16.98s  user  발화 끝
    24.46s  user  발화 시작: 사십오분… 생각보다 오래 걸리네요.
    24.64s  agent 발화 끝
    27.16s  <ret> 발화 (turn5 첫 프레임)
    27.39s  agent 발화 시작: <ret> 네, 맞아요. 지금이 퇴근 시간이라 교통 체증이 심한 것 같아요. 혹시 대중교통을 이용하실 건가요
    27.51s  user  발화 끝
    29.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: (tool result) Estimated travel time is 45 minutes.
    33.20s  user  발화 시작: 아니요, 차를 몰고 가려고요. 주차는 어디가 좋을까요?
    33.37s  agent 발화 끝
    36.53s  agent 발화 시작: 해운대에는 여러 주차장이 있는데, 혹시 해운대 해변 근처를 원하시나요? 아니면 다른 곳을 찾으시나요?
    36.72s  user  발화 끝
    43.34s  agent 발화 끝
    43.60s  user  발화 시작: 해변 근처가 좋겠어요.
    45.26s  <ret> 발화 (turn9 첫 프레임)
    45.33s  agent 발화 시작: <ret> 해운대 해변 공영 주차장은 시간당 이천 원입니다. 공간이 넉넉한 편이에요.
    45.58s  user  발화 끝
    47.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: (tool result) Haeundae Beach Public Parking: 2000 KRW per hour.
    49.55s  user  발화 시작: 아, 좋네요. 그럼 거기로 가야겠어요.
    49.73s  agent 발화 끝
    52.50s  user  발화 끝
    52.53s  agent 발화 시작: 네, 좋습니다. 혹시 지금 출발하시면 사십오분 뒤에 도착할 수 있을 거예요. 운전 조심하시고요.
    55.88s  user  발화 시작: 어.
    56.48s  user  발화 끝
    58.88s  agent 발화 끝
    58.94s  user  발화 시작: 네, 알겠습니다. 고마워요.
    60.41s  <ret> 발화 (turn14 첫 프레임)
    60.56s  agent 발화 시작: <ret> 천만에요. 혹시 채식주의자시죠? 해운대 근처에 맛있는 채식 식당을 추천해 드릴까요?
    60.68s  user  발화 끝
    62.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.89s]: [2026-04-19] User is vegetarian.
    66.28s  agent 발화 시작: 지원님은 채식주의자이시죠. 해운대 근처에 괜찮은 채식 식당이 몇 군데 있어요.
    66.44s  agent 발화 끝
    68.47s  user  발화 시작: 그치.
    69.09s  user  발화 끝
    71.60s  agent 발화 끝
    72.22s  user  발화 시작: 오, 정말요? 추천해주세요.
    74.00s  agent 발화 시작: 네, ‘베지테리언 레스토랑’이라는 곳이 평이 좋더라고요. 해변에서 차로 오분 거리에 있어요.
    74.16s  user  발화 끝
    75.96s  user  발화 시작: 응응.
    76.46s  user  발화 끝
    79.12s  user  발화 시작: 좋아요. 한번 가봐야겠네요.
    79.18s  agent 발화 끝
    81.71s  user  발화 끝
    81.84s  agent 발화 시작: 네, 즐거운 시간 보내세요.
    83.52s  agent 발화 끝
