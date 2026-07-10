# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "태연",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-23",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-06-17",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "home",
#       "text": "User's home address is 서울 종로구 세종대로 175."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시… 김민지 씨 연락처 알 수 있을까? | S2 이번 주말에 영화 보러 가고 싶은데, 괜찮은 영화 있을까? | S3 고마워. | S4 아, 일요일이구나.

     0.00s  user  발화 시작: 혹시… 김민지 씨 연락처 알 수 있을까?
     2.23s  <ret> 발화 (turn1 첫 프레임)
     2.62s  agent 발화 시작: <ret> 죄송하지만, 김민지 씨 연락처는 찾을 수 없었어요. 개인 정보라서 그런 것 같아요.
     2.73s  user  발화 끝
     4.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: (tool result)
     8.51s  user  발화 시작: 아… 그래? 그럼, 내일 날씨는 어때?
     8.60s  agent 발화 끝
    11.15s  <ret> 발화 (turn3 첫 프레임)
    11.38s  agent 발화 시작: <ret> 내일 서울 날씨는 이십팔도이고, 습도는 육십오%, 바람은 시속 삼 점 이킬로미터로 예상됩니다. 꽤
    11.46s  user  발화 끝
    13.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: (tool result) 28.0°C, humidity 65%, wind 3.2 km/h
    16.26s  user  발화 시작: 어머.
    16.74s  user  발화 끝
    19.40s  agent 발화 끝
    19.46s  user  발화 시작: 음…
    19.96s  user  발화 끝
    20.00s  agent 발화 시작: 더위 조심하시고, 시원하게 하루 보내세요. 혹시 다른 계획 있으세요?
    21.88s  user  발화 시작: 어어.
    22.51s  user  발화 끝
    24.95s  agent 발화 끝
    25.08s  user  발화 시작: 이번 주말에 영화 보러 가고 싶은데, 괜찮은 영화 있을까?
    28.69s  <ret> 발화 (turn9 첫 프레임)
    28.87s  user  발화 끝
    28.92s  agent 발화 시작: <ret> 이번 주말에 볼 만한 영화로는 인터스텔라, 기생충, 어벤져스: 엔드게임이 있습니다. 어떤 장르를 
    30.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: (tool result) 인터스텔라 — 크리스토퍼 놀란 (2014); 기생충 — 봉준호 (2019); 어벤져스: 엔드게임 — 
    33.92s  user  발화 시작: 그래.
    34.28s  user  발화 끝
    36.52s  agent 발화 끝
    37.24s  user  발화 시작: 음… 액션 영화 보고 싶어.
    39.83s  <ret> 발화 (turn12 첫 프레임)
    40.07s  agent 발화 시작: <ret> 어벤져스: 엔드게임 상영 시간은 오후 두시, 다섯시 삼십분, 아홉시에 있습니다.
    40.29s  user  발화 끝
    41.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (tool result) 14:00, 17:30, 21:00
    44.09s  user  발화 시작: 어어.
    44.73s  user  발화 끝
    45.87s  agent 발화 끝
    45.87s  user  발화 시작: 그럼, 다섯시 삼십분으로 예매해 줘.
    48.15s  <ret> 발화 (turn15 첫 프레임)
    48.31s  agent 발화 시작: <ret> 어벤져스: 엔드게임, 칠월 십이일 오후 다섯시 삼십분, 이인석으로 예매 완료되었습니다. 총 금액은
    48.46s  user  발화 끝
    50.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.55s]: (tool result) 어벤져스: 엔드게임, 2026-07-12 17:30, 2인석, 24000원, X9Z2B7
    59.87s  agent 발화 끝
    59.89s  user  발화 시작: 고마워.
    60.67s  user  발화 끝
    60.72s  agent 발화 시작: 천만에요. 즐거운 시간 보내세요.
    63.31s  agent 발화 끝
    63.52s  user  발화 시작: 아니, 괜찮아. 그럼 이만.
    65.46s  agent 발화 시작: 네, 안녕히 가세요.
    65.64s  user  발화 끝
    66.74s  agent 발화 끝
    66.93s  user  발화 시작: 잠깐만, 혹시 내일 모레가 무슨 요일이야?
    69.79s  user  발화 끝
    69.81s  <ret> 발화 (turn21 첫 프레임)
    70.04s  agent 발화 시작: <ret> 지금은 이천이십육년 칠월 십일 금요일 오후 두시 삼십삼분입니다. 내일 모레는 일요일입니다.
    71.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.29s]: (tool result) It is Friday, July 10, 2026 at 2:33 PM in Asia/Seoul rig
    76.33s  agent 발화 끝
    77.48s  user  발화 시작: 아, 일요일이구나.
    78.67s  agent 발화 시작: 네, 맞습니다. 주말 계획 세우시는 데 도움이 되셨으면 좋겠네요.
    78.71s  user  발화 끝
    82.80s  user  발화 시작: 혹시… 지금 내가 너무 불안한 것 같아.
    82.84s  agent 발화 끝
    86.07s  agent 발화 시작: 불안하시군요.
    86.17s  user  발화 끝
    87.08s  agent 발화 끝
