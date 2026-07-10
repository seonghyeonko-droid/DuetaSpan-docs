# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "재경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 호스트 파일 크기가 얼마나 돼? | S2 아니, 괜찮아. 그냥 궁금해서 물어본 거야. 그럼 오늘 날씨  | S3 …기차 시간표 좀 알아봐 줄 수 있어? | S4 아니, 그냥 일반석으로 해 줘.

     0.00s  user  발화 시작: 호스트 파일 크기가 얼마나 돼?
     2.03s  user  발화 끝
     2.03s  <ret> 발화 (turn1 첫 프레임)
     2.34s  agent 발화 시작: <ret> 호스트 파일 크기는 백이십팔바이트이고, 마지막 수정일은 칠월 구일 오전 열시 십오분입니다. 혹시 
     2.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: (tool result) The hosts file is 128 bytes in size and was last modifie
    10.71s  user  발화 시작: 아니, 그게 아니라… 음, 십킬로바이트 정도로 생각했는데.
    10.78s  agent 발화 끝
    14.79s  agent 발화 시작: 아, 십킬로바이트 정도로 생각하셨군요.
    14.87s  user  발화 끝
    17.19s  agent 발화 끝
    17.33s  user  발화 시작: 응, 십킬로바이트.
    18.85s  <ret> 발화 (turn5 첫 프레임)
    19.16s  agent 발화 시작: <ret> 다시 확인해 보니, 호스트 파일 크기는 여전히 백이십팔바이트이고, 마지막 수정일은 칠월 구일 오전
    19.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.16s]: (tool result) The hosts file is 128 bytes in size and was last modifie
    19.21s  user  발화 끝
    24.75s  user  발화 시작: 어.
    25.48s  user  발화 끝
    27.25s  agent 발화 시작: 파일 크기를 잘못 기억하셨던 것 같아요. 혹시 다른 파일 크기를 확인해 드릴까요?
    27.31s  agent 발화 끝
    31.85s  user  발화 시작: 아니, 괜찮아. 그냥 궁금해서 물어본 거야. 그럼 오늘 날씨 어때?
    31.89s  agent 발화 끝
    36.66s  <ret> 발화 (turn9 첫 프레임)
    36.66s  user  발화 끝
    36.89s  agent 발화 시작: <ret> 서울 날씨는 현재 이십삼도이고, 습도는 칠십사%, 바람은 시속 오 점 오킬로미터입니다. 오늘 하루
    36.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.21s]: (tool result) The weather in Seoul is 23.0°C, humidity 74%, wind 5.5 k
    42.59s  user  발화 시작: 대박.
    43.23s  user  발화 끝
    45.09s  agent 발화 끝
    45.47s  user  발화 시작: 고마워. 혹시 내일 모레 부산 가는…
    48.85s  user  발화 끝
    49.95s  user  발화 시작: …기차 시간표 좀 알아봐 줄 수 있어?
    51.70s  <ret> 발화 (turn13 첫 프레임)
    51.84s  agent 발화 시작: <ret> 부산행 기차는 서울역에서 오전 여덟시, 열시 삼십분, 오후 한시, 세시 삼십분, 여섯시에 출발합니
    51.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.11s]: (tool result) Trains to Busan depart from Seoul Station at 08:00, 10:3
    52.02s  user  발화 끝
    61.86s  user  발화 시작: 음… 열시 삼십분 기차가 좋겠어.
    61.96s  agent 발화 끝
    64.64s  agent 발화 시작: 네, 열시 삼십분 기차로 알아봐 드릴게요. 혹시 좌석 등급을 지정하고 싶으신가요?
    64.72s  user  발화 끝
    69.82s  agent 발화 끝
    69.84s  user  발화 시작: 아니, 그냥 일반석으로 해 줘.
    71.67s  <ret> 발화 (turn17 첫 프레임)
    72.06s  agent 발화 시작: <ret> 부산행 기차, 일반석, 십오C 좌석으로 예매가 완료되었습니다. 확인번호는 칠 팔 구 엑스 와이 제
    72.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.95s]: (tool result) Train to Busan confirmed, standard class, seat 15C, conf
    72.29s  user  발화 끝
    78.91s  user  발화 시작: 어.
    79.68s  user  발화 끝
    80.95s  user  발화 시작: 와, 고마워. 정말 큰 도움이 됐어.
    81.00s  agent 발화 끝
    83.90s  agent 발화 시작: 천만에요. 언제든지 필요한 일이 있으면 저를 찾아주세요. 제가 항상 곁에서 도와드리겠습니다.
    83.98s  user  발화 끝
    90.19s  agent 발화 끝
