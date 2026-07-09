# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi 내부 보유 — A 프로필=프롬프트 내재/no-RAG, B 메모리=RAG <ret>):
#   A. 프로필: Name: Rowan · Location: Toronto, Canada · Nationality: Canadian · Gender: non-binary · Age: early 30s · TZ: America/Toronto (EST, UTC-5) · Currency: CAD ($)
#   B. 저장 메모리:
#      [2026-07-12] User is allergic to penicillin.
#      [2026-06-09] User works as a physical therapist.
#      [2026-04-03] User is planning a trip to Switzerland in October.
#      [2026-03-14] User's favorite cuisine is Thai.
#   B. 과거 대화 요약:
#      [2026-07-18] Booked a dentist appointment — asked for an early-morning slot; prefers Dr. Han
#      [2026-03-05] Planning a birthday dinner — party of six; looking for outdoor seating

# EXAMINER(FDB-v2) 단계: S1 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지  | S2 와, 에디 반 헤일런이요? 몰랐어요! 정말 대단하네요— | S3 저기, 혹시 쓰레기 버리신 거 기억하세요? | S4 죄송해요. 마이클 잭슨이 부탁해서 한 건가요, 아니면 그냥 자

     0.00s  user  발화 시작: 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했어요. 다른 곡들하고는 좀 다르게 들려서요
     7.59s  <ret> 발화 (turn1 첫 프레임)
     7.74s  user  발화 끝
     7.91s  agent 발화 시작: <ret> 정말 좋은 질문이에요. 그리고 정말 유명한 솔로죠. 에디 반 헤일런이 그 유명한 기타 솔로를 연주
     9.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat I
    10.90s  user  발화 시작: 예.
    11.49s  user  발화 끝
    15.65s  agent 발화 끝
    15.80s  user  발화 시작: 와, 에디 반 헤일런이요? 몰랐어요! 정말 대단하네요—
    20.52s  user  발화 끝
    20.82s  agent 발화 시작: 그건 정말 그의 실력을 보여주는 사례라고 생각해요. 록과 팝을 아주 자연스럽게 섞었거든요.
    26.80s  user  발화 시작: 저기, 혹시 쓰레기 버리신 거 기억하세요?
    27.03s  agent 발화 끝
    29.78s  user  발화 시작: 죄송해요. 마이클 잭슨이 부탁해서 한 건가요, 아니면 그냥 자발적으로 한 건가요?
    29.89s  user  발화 끝
    34.73s  <ret> 발화 (turn7 첫 프레임)
    35.12s  agent 발화 시작: <ret> 그 협업이 어떻게 시작됐는지 정말 흥미로운 이야기예요. 마이클 잭슨이 반 헤일런 콘서트에 갔다가 
    35.25s  user  발화 끝
    36.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.50s]: Michael Jackson invited Van Halen to contribute a guitar solo to "Beat
    46.62s  agent 발화 끝
