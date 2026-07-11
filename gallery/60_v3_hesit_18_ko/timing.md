# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "노린",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-07",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 혹시 nba에서 제일 돈 많이 받는 선수가 누구예요? | S2 그으으음… 혹시 그 선수가 지금 몇 살이에요? | S3 서른아홉살이라니, 아직도 엄청 잘 뛰던데… 대단하다. | S4 아, 레이커스군요. 알겠습니다. 고마워요!

     0.00s  user  발화 시작: 음… 혹시 nba에서 제일 돈 많이 받는 선수가 누구예요?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.07s  agent 발화 시작: <ret> 현재 nba에서 가장 많은 연봉을 받는 선수는 르브론 제임스 선수인데, 이천이십사년 이월 기준으로
     0.07s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: LeBron James is currently the highest paid player in the NBA, earning 
     0.07s  user  발화 끝
     0.23s  user  발화 시작: 와, 오천 삼백 이십만 달러요? 진짜 대단하네요.
     0.23s  agent 발화 끝
     0.29s  agent 발화 시작: 정말 놀라운 금액이죠. 르브론 제임스 선수는 코트 안팎으로 많은 사람들에게 영감을 주는 선수예요.
     0.29s  user  발화 끝
     0.37s  <ret> 발화 (turn5 첫 프레임)
     0.40s  user  발화 시작: 그으으음… 혹시 그 선수가 지금 몇 살이에요?
     0.40s  agent 발화 끝
     0.45s  agent 발화 시작: <ret> 르브론 제임스 선수는 천구백팔십사년 십이월 삼십일에 태어나서, 오늘 날짜인 이천이십육년 칠월 십일
     0.45s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: LeBron James was born on December 30, 1984, making him 39 years old as
     0.45s  user  발화 끝
     0.56s  user  발화 시작: 서른아홉살이라니, 아직도 엄청 잘 뛰던데… 대단하다.
     0.56s  agent 발화 끝
     0.61s  agent 발화 시작: 맞아요. 나이는 숫자에 불과하다는 걸 보여주는 좋은 예시인 것 같아요. 꾸준한 노력의 결과겠죠.
     0.61s  user  발화 끝
     0.69s  <ret> 발화 (turn9 첫 프레임)
     0.72s  user  발화 시작: 혹시 르브론 제임스 선수가 속한 팀은 어디예요?
     0.72s  agent 발화 끝
     0.77s  agent 발화 시작: <ret> 르브론 제임스 선수는 현재 내셔널 바스켓볼 협회, nba의 로스앤젤레스 레이커스 팀에서 뛰고 있습
     0.77s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: LeBron James currently plays for the Los Angeles Lakers of the Nationa
     0.77s  user  발화 끝
     0.88s  user  발화 시작: 아, 레이커스군요. 알겠습니다. 고마워요!
     0.88s  agent 발화 끝
     0.91s  agent 발화 시작: 천만에요. 언제든 도움이 필요하면 말씀해주세요. 당신의 꿈을 향해 나아가는 여정을 응원합니다.
     0.91s  user  발화 끝
     1.00s  agent 발화 끝
