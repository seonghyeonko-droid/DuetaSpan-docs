# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "하현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 인도에서 불가촉천민 제도가 특히 어느 공동체에게 있었나요? | S2 아, 죄송해요. 다시 질문할게요. | S3 우대 정책에는 어떤 것들이 있나요? | S4 혹시 관련 다큐멘터리를 추천해 줄 수 있나요?

     0.00s  user  발화 시작: 인도에서 불가촉천민 제도가 특히 어느 공동체에게 있었나요?
     3.48s  <ret> 발화 (turn1 첫 프레임)
     3.80s  agent 발화 시작: <ret> 인도에서 널리 퍼진 불가촉천민 제도는 달릿 공동체에게 특히 심각했습니다.
     3.80s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.67s]: the Dalit communities faced widespread untouchability practices in Ind
     3.94s  user  발화 끝
     8.47s  agent 발화 끝
     8.59s  agent 발화 시작: 사회적으로 소외된 분들에게 관심을 갖는 건 중요하다고 생각해요.
    11.92s  agent 발화 끝
    13.08s  user  발화 시작: 달릿 공동체는 정확히 어떤 사람들이죠?
    15.71s  user  발화 끝
    15.73s  <ret> 발화 (turn4 첫 프레임)
    15.96s  agent 발화 시작: <ret> 달릿은 과거 ‘불가촉천민’으로 알려졌으며, 인도의 최하위 계층에 속한 사람들을 말합니다.
    15.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: Dalits, formerly known as "untouchables," are members of India's lowes
    21.28s  agent 발화 끝
    21.40s  agent 발화 시작: 그분들의 어려움을 이해하려는 노력은 정말 멋진 일이에요.
    24.64s  agent 발화 끝
    24.72s  user  발화 시작: 음… 잠깐만요. 엄마, 저녁 뭐 먹을까요?
    29.23s  user  발화 시작: 김치찌개 먹을까?
    29.40s  user  발화 끝
    30.48s  user  발화 시작: 아, 죄송해요. 다시 질문할게요.
    30.66s  user  발화 끝
    32.95s  agent 발화 시작: 괜찮아요.
    33.01s  user  발화 끝
    33.58s  agent 발화 끝
    35.34s  user  발화 시작: 달릿 공동체의 역사는 어떻게 되나요?
    37.77s  <ret> 발화 (turn11 첫 프레임)
    37.92s  agent 발화 시작: <ret> 달릿의 역사는 수세기 동안 이어진 사회적 차별과 억압으로 특징지어집니다.
    37.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: The Dalit history is marked by centuries of social discrimination and 
    38.06s  user  발화 끝
    39.75s  user  발화 시작: 네.
    40.25s  user  발화 끝
    42.78s  agent 발화 시작: 과거의 아픔을 기억하고 공감하는 건 치유의 첫걸음이죠.
    42.78s  agent 발화 끝
    45.69s  agent 발화 끝
    46.06s  user  발화 시작: 달릿 공동체의 현재 상황은 어떤가요?
    48.25s  <ret> 발화 (turn15 첫 프레임)
    48.64s  agent 발화 시작: <ret> 법적 보호 조치가 있지만, 달릿은 인도에서 여전히 상당한 차별을 겪고 있습니다.
    48.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: Despite legal protections, Dalits still experience significant discrim
    48.88s  user  발화 끝
    53.37s  agent 발화 시작: 상황이 완전히 나아지진 않았지만, 개선을 위한 노력이 계속되고 있다는 점도 기억해야 해요.
    53.45s  agent 발화 끝
    55.61s  user  발화 시작: 맞아요.
    56.24s  user  발화 끝
    58.51s  agent 발화 끝
    58.74s  user  발화 시작: 인도 정부는 달릿 공동체를 위해 어떤 노력을 하고 있나요?
    62.17s  <ret> 발화 (turn19 첫 프레임)
    62.25s  agent 발화 시작: <ret> 인도 정부는 달릿을 위한 우대 정책을 시행하고 있습니다.
    62.25s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.37s]: The Indian government has implemented affirmative action policies for 
    62.34s  user  발화 끝
    65.57s  agent 발화 시작: 긍정적인 변화를 만들기 위한 노력은 계속되어야겠죠.
    65.62s  agent 발화 끝
    68.71s  agent 발화 끝
    69.49s  user  발화 시작: 우대 정책에는 어떤 것들이 있나요?
    71.52s  <ret> 발화 (turn22 첫 프레임)
    71.60s  agent 발화 시작: <ret> 우대 정책에는 교육 및 공무원 채용 시 일정 좌석을 예약하는 것이 포함됩니다.
    71.60s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.72s]: Affirmative action includes reserved seats in education and government
    71.75s  user  발화 끝
    76.31s  agent 발화 끝
    76.39s  agent 발화 시작: 공정한 기회를 제공하는 중요한 방법이라고 생각해요.
    77.39s  user  발화 시작: 예.
    78.02s  user  발화 끝
    78.97s  agent 발화 끝
    79.07s  user  발화 시작: 그럼 지금도 차별이 남아있다는 건가요?
    81.02s  <ret> 발화 (turn26 첫 프레임)
    81.42s  agent 발화 시작: <ret> 달릿은 여전히 자원 접근과 사회적 이동에 있어 차별에 직면하고 있습니다.
    81.42s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.03s]: Dalits continue to face discrimination in access to resources and soci
    81.53s  user  발화 끝
    85.45s  agent 발화 끝
    85.48s  agent 발화 시작: 사회적 인식 개선이 중요한 과제라고 생각해요.
    86.55s  user  발화 시작: 네.
    87.19s  user  발화 끝
    88.10s  agent 발화 끝
    90.46s  user  발화 시작: 차별을 없애기 위해 개인적으로 할 수 있는 일은 무엇인가요?
    94.16s  user  발화 끝
    94.17s  agent 발화 시작: 편견 없는 마음으로 타인을 대하고, 차별에 반대하는 목소리를 내는 것이 중요해요.
    98.53s  agent 발화 끝
    98.56s  agent 발화 시작: 작은 실천들이 세상을 바꿀 수 있다고 믿어요.
   101.10s  agent 발화 끝
   101.60s  user  발화 시작: 주변에 차별을 당하는 사람을 보면 어떻게 해야 할까요?
   104.78s  agent 발화 시작: 용기를 내어 그 사람을 돕고, 필요한 경우 전문가의 도움을 받을 수 있도록 안내해 주세요.
   104.80s  user  발화 끝
   109.91s  agent 발화 끝
   109.98s  agent 발화 시작: 함께 어려움을 나누는 것이 중요하죠.
   111.83s  agent 발화 끝
   111.97s  user  발화 시작: 혹시 관련 다큐멘터리를 추천해 줄 수 있나요?
   114.84s  <ret> 발화 (turn36 첫 프레임)
   114.91s  agent 발화 시작: <ret> '카스트 어웨이'라는 다큐멘터리를 추천합니다. imdb.com/title/tt12411394에서 
   114.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: (tool result) "Caste Away – domain: imdb.com/title/tt12411394/"
   115.07s  user  발화 끝
   121.81s  agent 발화 끝
   121.89s  agent 발화 시작: 다큐멘터리를 통해 더 깊이 이해할 수 있을 거예요.
   124.47s  agent 발화 끝
   124.57s  user  발화 시작: 좋은 정보 감사합니다.
   126.48s  user  발화 끝
   126.80s  agent 발화 시작: 도움이 되었다니 기뻐요.
   128.03s  user  발화 시작: 혹시 지금 서울 날씨 알려줄 수 있어요?
   128.26s  agent 발화 끝
   130.53s  <ret> 발화 (turn41 첫 프레임)
   130.70s  user  발화 끝
   130.77s  agent 발화 시작: <ret> 현재 서울의 기온은 이십팔도이고, 습도는 육십오%, 풍속은 시속 삼 점 이킬로미터입니다.
   130.77s  ⚡SPAN 주입 [d'=0.88s / d_lead=5.56s]: (tool result) "28.0°C, humidity 65%, wind 3.2 km/h"
   136.33s  agent 발화 끝
   136.47s  agent 발화 시작: 시원한 물을 자주 마시는 게 좋겠어요.
   137.91s  user  발화 시작: 예.
   138.40s  user  발화 끝
   138.45s  agent 발화 끝
   138.48s  user  발화 시작: 네, 알겠습니다.
   139.68s  agent 발화 시작: 건강 관리에 신경 쓰면서 하루 보내세요.
   139.84s  user  발화 끝
   141.94s  agent 발화 끝
