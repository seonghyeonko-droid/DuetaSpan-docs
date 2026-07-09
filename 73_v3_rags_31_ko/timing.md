# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 데어데블 시즌 3는 언제 공개되나요?
     1.80s  <ret> 발화 (turn1 첫 프레임)
     2.03s  agent 발화 시작: <ret> 데어데블 시즌 3의 공개 날짜를 알려드릴게요. 데어데블 시즌 3는 2018년 10월 26일에 공개
     2.26s  user  발화 끝
     2.84s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.63s]: The third season of Daredevil was released on October 26, 2018.
     9.90s  agent 발화 끝
