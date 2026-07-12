# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "다아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-21",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-10-04",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 엄마 생신 선물 뭐 드려야 할까? | S2 꽃은 너무 흔한가? 좀 특별한 걸 주고 싶어. | S3 요리 강좌는 좋은 아이디어인데, 혹시 근처에 괜찮은 곳 있어? | S4 오, 마카롱 좋아하시는데! 그럼 그걸로 예약해 줘.

     0.00s  user  발화 시작: 엄마 생신 선물 뭐 드려야 할까?
     2.81s  agent 발화 시작: 어떤 선물을 좋아하시는지 생각해 보셨어요?
     2.81s  user  발화 끝
     5.16s  user  발화 시작: 글쎄… 평소에 뭘 원하시는지 잘 모르겠어.
     5.16s  agent 발화 끝
     7.97s  agent 발화 시작: 엄마가 평소에 즐겨 하시는 취미나 관심사가 있으세요?
     7.97s  user  발화 끝
    11.25s  user  발화 시작: 음… 정원 가꾸는 거랑 요리하는 걸 좋아하시는데.
    11.25s  agent 발화 끝
    14.53s  agent 발화 시작: 정원 가꾸는 걸 좋아하신다면, 예쁜 꽃이나 식물을 선물하는 건 어떠세요?
    14.53s  user  발화 끝
    19.22s  user  발화 시작: 어.
    19.22s  agent 발화 끝
    19.69s  user  발화 시작: 꽃은 너무 흔한가? 좀 특별한 걸 주고 싶어.
    19.69s  user  발화 끝
    23.20s  <ret> 발화 (turn8 첫 프레임)
    23.44s  agent 발화 시작: <ret> 세상에서 가장 큰 꽃꽂이는 네덜란드 회사인 블루멘벨데에서 만들었는데, 높이가 십이 점 이미터, 폭
    23.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: The largest flower arrangement, created by the Dutch company Bloemenwe
    23.44s  user  발화 끝
    31.41s  user  발화 시작: 와.
    31.41s  agent 발화 끝
    31.88s  user  발화 시작: 와, 엄청 크네! 그래도 엄마는 꽃을 좋아하시니까 괜찮을지도.
    31.88s  user  발화 끝
    35.63s  agent 발화 시작: 엄마가 요리를 좋아하신다면, 고급 식재료나 요리 강좌를 선물하는 것도 좋은 선택일 수 있어요.
    35.63s  user  발화 끝
    41.72s  user  발화 시작: 어.
    41.72s  agent 발화 끝
    42.19s  user  발화 시작: 요리 강좌는 좋은 아이디어인데, 혹시 근처에 괜찮은 곳 있어?
    42.19s  user  발화 끝
    46.17s  <ret> 발화 (turn14 첫 프레임)
    46.41s  agent 발화 시작: <ret> 근처에 '쿡앤베이크'랑 '프랑스 요리 아카데미' 두 군데가 있어요. '쿡앤베이크'는 공 이 일 이
    46.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.00s]: (tool result) {"restaurants": [{"name": "쿠킹클래스 쿡앤베이크", "address": "서울특
    46.41s  user  발화 끝
    61.41s  user  발화 시작: 응.
    61.41s  agent 발화 끝
    61.88s  user  발화 시작: 쿡앤베이크… 거긴 어떤 수업이 있나?
    61.88s  user  발화 끝
    64.22s  agent 발화 시작: 다양한 종류의 요리 수업이 있는데—
    64.22s  user  발화 끝
    66.56s  user  발화 시작: …혹시 엄마가 좋아하는 프랑스 요리 수업도 있나?
    66.56s  agent 발화 끝
    69.84s  agent 발화 시작: 네, 프랑스 요리 수업도 있어요. 다음 주 화요일 오후 두시에 파이와 마카롱 만드는 수업이 있답니다.
    69.84s  user  발화 끝
    76.88s  user  발화 시작: 어어.
    76.88s  agent 발화 끝
    77.34s  user  발화 시작: 오, 마카롱 좋아하시는데! 그럼 그걸로 예약해 줘.
    77.34s  user  발화 끝
    80.39s  <ret> 발화 (turn22 첫 프레임)
    80.63s  agent 발화 시작: <ret> '쿡앤베이크'에 다음 주 화요일 오후 두시에 파이와 마카롱 만들기 수업을 예약했습니다. 확인번호는
    80.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: (tool result) {"confirmation id": "B7X9Z2"}
    80.63s  user  발화 끝
    89.06s  user  발화 시작: 고마워, 덕분에 좋은 선물 찾은 것 같아.
    89.06s  agent 발화 끝
    92.34s  agent 발화 시작: 제가 도와드릴 수 있어서 기뻐요. 엄마가 정말 좋아하실 거예요.
    92.34s  user  발화 끝
    96.56s  agent 발화 끝
