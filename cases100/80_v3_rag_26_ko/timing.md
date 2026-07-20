# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "윤완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     },
#     {
#       "date": "2026-05-27",
#       "category": "pet",
#       "text": "User has a Russian Blue cat named Nabi."
#     },
#     {
#       "date": "2026-05-08",
#       "category": "airline",
#       "text": "User usually flies with Emirates."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Indian."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "plant",
#       "text": "User is growing a monstera at home."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "schedule",
#       "text": "User has on-call weekends."
#     },
#     {
#       "date": "2025-12-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-26",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-03-21",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot next Tuesday",
#         "prefers Dr. Han at Bright Smile Clinic"
#       ]
#     },
#     {
#       "date": "2026-02-27",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Adopting a rescue dog",
#       "bullets": [
#         "looking at a 2-year-old Beagle mix",
#         "asked about crate training and vet costs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 아, 안녕하세요. 이사 온 지 얼마 안 됐는데, 정착하는 데  | S2 음, 좋은 말씀이네요. 지금은 그냥 생각나는 대로 물어보는 거 | S3 …가보고 싶었는데. 해산물 좋아하거든요. | S4 오, 고급 숙소네요. 가격대는 좀 있을 것 같지만.

     0.00s  user  발화 시작: 아, 안녕하세요. 이사 온 지 얼마 안 됐는데, 정착하는 데 도움 주시는 분이 필요했어요.
     2.50s  agent 발화 시작: 네네.
     3.14s  agent 발화 끝
     5.27s  agent 발화 시작: 안녕하세요! 새로운 곳에 정착하는 건 설레면서도 걱정될 수 있죠. 제가 아렐라라인데, 편안하게 도와드릴게요.
     5.33s  user  발화 끝
    11.80s  user  발화 시작: 네, 다행이에요. 혹시 홍콩이 중국으로 반환된 게 언제였죠? 갑자기 궁금해졌어요.
    12.03s  agent 발화 끝
    16.95s  <ret> 발화 (turn4 첫 프레임)
    17.31s  agent 발화 시작: <ret> 홍콩은 천구백구십칠년 칠월 일일에 중국으로 반환되었어요. 그게 영국 통치 백오십년이 넘는 시기를 
    17.40s  user  발화 끝
    17.66s  ⚡SPAN 주입 [d'=0.70s / d_lead=7.79s]: Hong Kong was transferred to China on 1 July 1997, ending more than 15
    22.86s  user  발화 시작: 맞아.
    23.58s  user  발화 끝
    25.10s  agent 발화 끝
    25.54s  user  발화 시작: 아, 그렇군요. 영국 식민지였다니, 생각보다 오래됐네요.
    29.47s  user  발화 끝
    29.87s  agent 발화 시작: 맞아요. 홍콩은 오랜 기간 동안 다양한 문화의 영향을 받았어요.
    33.75s  user  발화 시작: 음, 좋은 말씀이네요. 지금은 그냥 생각나는 대로 물어보는 거예요. 혹시 부산에서 제일 큰 시장이 어디예요?
    33.94s  agent 발화 끝
    38.95s  agent 발화 시작: 예.
    39.50s  agent 발화 끝
    40.34s  <ret> 발화 (turn10 첫 프레임)
    40.64s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.76s]: (tool result) Jagalchi Market is Busan's largest seafood market, offer
    40.76s  agent 발화 시작: <ret> 부산에서 가장 큰 시장은 자갈치 시장이에요. 신선한 해산물과 지역 농산물을 다양하게 판매하고 있답
    40.98s  user  발화 끝
    45.56s  user  발화 시작: 와.
    46.20s  user  발화 끝
    47.52s  agent 발화 끝
    47.58s  user  발화 시작: 아, 자갈치 시장! 거기…
    50.54s  user  발화 끝
    51.88s  user  발화 시작: …가보고 싶었는데. 해산물 좋아하거든요.
    55.37s  agent 발화 시작: [happy] 자갈치 시장은 정말 활기 넘치는 곳이에요. 다양한 해산물을 맛볼 수 있고, 현지 분위기를 느낄
    55.58s  user  발화 끝
    62.09s  user  발화 시작: 혹시 자갈치 시장 근처에 괜찮은 숙소도 있을까요?
    62.32s  agent 발화 끝
    65.30s  <ret> 발화 (turn16 첫 프레임)
    65.45s  agent 발화 시작: <ret> 자갈치 시장 근처에는 파크 하얏트 부산이 있어요. 멋진 바다 전망과 다양한 편의시설을 갖춘 고급 
    65.66s  user  발화 끝
    66.51s  ⚡SPAN 주입 [d'=1.21s / d_lead=7.65s]: (tool result) The Park Hyatt Busan offers luxurious accommodations nea
    69.04s  user  발화 시작: 응.
    69.58s  user  발화 끝
    73.11s  agent 발화 끝
    73.47s  user  발화 시작: 오, 고급 숙소네요. 가격대는 좀 있을 것 같지만.
    77.49s  user  발화 끝
    77.67s  agent 발화 시작: 네, 파크 하얏트 부산은 조금 가격대가 있는 편이에요. 좀 더 저렴한 숙소도 찾아볼까요?
    81.56s  user  발화 시작: 응.
    82.19s  user  발화 끝
    83.64s  agent 발화 끝
    85.02s  user  발화 시작: 아니에요, 괜찮아요. 그냥 궁금해서 물어봤어요.
    88.58s  agent 발화 시작: [happy] 알겠습니다. 혹시 다른 궁금한 점이 있으시면 언제든지 말씀해주세요. 새로운 곳에 잘 정착하실 
    88.63s  user  발화 끝
    97.30s  agent 발화 끝
